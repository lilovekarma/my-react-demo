import axios from "axios"
import { useEffect, useRef, useState, } from "react";


export default function App() {


    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "Ti1dqxKIImKwQDfE7BDONv97O_ytR4v7DXlODdxK5K0";
    const [filterString, setFilterString] = useState('cat');


    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    //宣告目前頁數
    const currentPage = useRef(1);

    //讀取變數
    const isLoading = useRef(false);


    // 建立非同步方法，取得遠端資料
    const getPhotos = async (psge = 1, isNew = true) => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);


            // 將資料寫入陣列jsonData
            setJsonData(result.data.results);
        } catch (error) {
            console.log(error)
        }
    }

    //顯示陣列資料元件
    const ShowPhoto = () => {
        console.log(jsonData)
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ margin: "3px" }}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>

                )

            })
        )

    }
    //列表高度
    const listRef = useRef(null);

    useEffect(() => {
        getPhotos();
        //滾動監聽函示
        const scrollEvent = () => {
            // console.dir(listRef.current);

            //目前圖片高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTOP) - window.innerHeight;
            if (window.screenY > height)
                //頁數+1
                currentPage.current++;
            //同一個關鍵字不被覆蓋
            getPhotos(currentPage.current, false);

        }
        //滾動監聽
        window.addEventListener('scroll', scrollEvent);
        //移除監聽(為了確保每一次捲動時,正確的位置與資料)
        return () => window.removeEventListener('scroll', scrollEvent)

    }, [])




    return (
        <>
            <h1>取得遠端資料</h1><hr />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} ref={listRef}>
                <ShowPhoto />

            </div>

        </>
    )
}

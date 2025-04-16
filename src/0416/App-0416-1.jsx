import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [citys, setCitys] = useState([])
    //
    useEffect(() => {
        (async () => {
            //取得遠端資料
            //const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            //取得本基端public資料同理也可以把圖片放進來
            const data = await axios.get('./api/F-C0032-001.json');

            //console.log(data); 查看是否連上資料
            //解構各縣市的氣象資訊
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            <showCity />
            setCitys(location);
        })();/* ();立即執行 */


    }, [])





    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* 一列二列 */}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈,來顯示所有縣市 */}
                {
                    citys.map((city) => {
                        return (
                            <div className="col" key={city.locationName}>
                                {/* 卡片樣式 */}
                                <div className="card text-center">
                                    {/* 卡片標題 */}
                                    <div className="card-header">
                                        <div className="h4 my-0">台北市</div>
                                    </div>
                                    {/* 身:卡片內容 */}
                                    <div className="row row-cols-3">
                                        {/* 第一欄 */}
                                        <div className="col">
                                            <div className="h4 my-0">16日</div>
                                            {/* 時間 */}
                                            上午6:00 <br />
                                            ~<br />
                                            下午6:00 <br />
                                            {/* 天氣圖 使用執行路徑所以放在poblic資料夾中 如果放在其他資料夾都要寫imprt */}
                                            <img src="./weatherIcon/晴時多雲.svg" alt="" />
                                            {/* 天氣名稱 */}
                                            <div className="mt-2">晴時多雲</div>
                                            {/* 降雨機率 */}
                                            <div className="mt-2">
                                                {/* icon */}
                                                <i className="bi bi-umbrella">10%</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default App
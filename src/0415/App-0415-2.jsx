import { useState } from 'react';
import p1 from '../assets/img0415/p1.jpg'
import p2 from '../assets/img0415/p2.jpg'


function App() {
    const arrPhotos = [p1, p2];
    const [currentImg,setCurrentImg] = useState(0);
    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {/* <img src={p1} alt="" width={100}/>
                <img src={p2} alt="" width={100}/> */}
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt="" width={100}
                                    onMouseOver={e => setCurrentImg(index)}
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                }


                </div>
                {/* 放大區 */}
                <div>
                    <img src={arrPhotos [currentImg]} alt="" width={300}/>
                </div>


            </div>



        </>
    )
}
export default App
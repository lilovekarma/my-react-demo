import { useEffect, useState } from "react"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App() {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const slides = [
        { url: "./imges0429/p1.jpg" },
        { url: "./imges0429/p2.jpg" },
        { url: "./imges0429/p3.jpg" },
        { url: "./imges0429/p4.jpg" },

    ]
    //當currentIndex值改變時,會在觸發useEffect
    useEffect(() => {
        //換下一張
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);
        //清除
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);
    //下一張
    const nextSlide = () => {
        //檢查是否在最後一張,若是,則回到第一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }
    const prevSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }
    //建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            //擺放icon位置
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px",
            }}>
                {
                    direction === "left" ? (
                        <FaArrowCircleLeft size={50} onClick={onClick} />
                    ) : (<FaArrowCircleRight size={50} onClick={onClick} />)
                }
            </div>
        )
    }
    return (
        <>
            {/* 最外層 */}
            <div className="wrapper" style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",
            }}>
                {/* 圖*/}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"

                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
                    {/*上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/*下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />


                </div>
            </div>
        </>
    )
}
export default App
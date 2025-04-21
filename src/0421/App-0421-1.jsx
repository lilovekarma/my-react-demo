import { Route, Routes } from "react-router-dom"
import Navbar from"./Nabar"
import Home from"./Home"
import About from"./About"
import News from"./News"


function App(){
    return(
       <div className="wrap">
        {/* 載入首頁 */}
        <Navbar/>
        <hr />
        
        <Routes>
            {/* 呼叫首頁 */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/News" element={<News/>}></Route>



        </Routes>
       </div>
       
    )
}
export default App
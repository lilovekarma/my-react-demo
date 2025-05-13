function App() {

    let country = [
        {
            cityId: 1,
            cityName: "台北市",
        },

        {
            cityId: 2,
            cityName: "新北市",
        }
    ]



    return (
        <>
        <button onClick={()=>{
            //將陣列物件轉成字串
            let countryString=JSON.stringify(country);
            localStorage.setItem('countrys',countryString);
        }}>寫入</button>
        <button onClick={()=>{
            //取出local storage 
            let  getData=localStorage.getItem('countrys');

            //將字串轉陣列物件
            let getDataArr=JSON.parse(getData);
            console.log('getDataArr',getDataArr,typeof(getDataArr));
        }}>讀取</button>


        </>
    )

}
export default App
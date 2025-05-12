import { title } from "motion/react-client"
import { useMemo, useState } from "react";

function App() {
    //建立表格資料
    const prodData = [
        {
            id: 1,
            title: "prod1",
            price: 80,
        },
        {
            id: 2,
            title: "prod2",
            price: 180,
        },
        {
            id: 3,
            title: "prod3",
            price: 280,
        },
        {
            id: 4,
            title: "prod4",
            price: 100,
        },
        {
            id: 5,
            title: "prod5",
            price: 150,
        },
    ];
    //建立表格元件
    const ProdTable = ({ filterProds }) => {
        return (
            <table>
                <tbody>
                    {
                        filterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.title}</td>
                                    <td>{prod.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }


    //陣列變數
    const [prods, setProds] = useState(prodData);
    //排序變數預設遞增
    const [ascending, setAscending] = useState(true);
    //搜尋變數
    const [search, setSearch] = useState('');
    //建立排序與搜尋
    const filterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                return ascending
                    ? a.price - b.price
                    : b.price - a.price


            })
            .filter((prod)=>{
                return prod.title.match(search);
            })

    }, [ascending, search])

    return (
        <>
            <h1>userMemo搜尋與排序</h1>
            <hr style={{ marginBottom: "50px" }} />
            升降冪:
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => {
                    setAscending(e.target.checked)
                }}
            />
            <br />

            搜尋
            <input
                type="text"
                checked={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            {/* 顯示結果：呼叫表格元件 */}
            {/* <ProdTable filterProds={prods} /> */}
            <ProdTable filterProds={filterProds} />



        </>
    )
}
export default App
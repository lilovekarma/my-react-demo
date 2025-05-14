import { useEffect } from 'react'
import $ from 'jquery'
import './App.css'


export default function App() {


    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增html元素 => append()
        // 取得子元素 => children()
        $('a:has(.ttpShow)')
            .on('mouseover', function (e) {
                // 動態增加「append()」一個div區域在body標籤中
                // 取得超連結指定的子元素「children()」中的html內容「html()」
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                }).fadeIn('500');

            })
            .on('mouseout', function () {
                $('#ttpPanel').remove();
            })
            .on('mousemove', function (e) {
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                });
            })


    }, [])


    return (
        <>
            <p>
                ToolTip浮動顯示文字
                <a href='#'>
                    顯示文字
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error aut recusandae libero alias iure, illum sit ut animi similique porro reprehenderit consequatur facilis ex exercitationem autem ad tenetur. Esse nesciunt dignissimos fugit quo ipsum! Voluptates exercitationem sed eveniet provident aperiam quisquam distinctio maiores facere voluptatum omnis libero beatae quas cupiditate modi, enim, quidem corrupti vitae alias impedit nisi voluptas, magnam unde? Cum ex velit totam explicabo adipisci veritatis quibusdam error ducimus quam! Esse quam sequi incidunt nam rerum quia. Mollitia nam numquam praesentium voluptates laborum minus animi nobis ipsum et exercitationem, nesciunt, quae eum provident error nostrum quibusdam beatae, doloremque veritatis odit. Mollitia possimus ab rem, recusandae nam natus unde amet fugiat, quis aut, vero corrupti quidem sunt ad quaerat hic in aliquid non excepturi praesentium voluptatem. Totam consequuntur harum qui explicabo possimus cum a libero iure, ex similique, at eveniet sapiente eum. Asperiores exercitationem blanditiis praesentium, laborum autem assumenda magni dolorum esse a quidem molestias est ducimus corrupti ex in aperiam quasi fugit! Sequi nesciunt obcaecati aliquid a cum distinctio facilis, maxime similique. Maiores accusamus nam natus voluptatem. Nihil nostrum, delectus voluptatum sapiente maiores, autem ipsa suscipit dolorem repellendus exercitationem omnis tenetur perspiciatis eos quas voluptas magnam nemo quaerat facilis a necessitatibus porro nobis, minima sint. Commodi eligendi maxime minus fugit dicta totam illo, molestias voluptas corrupti et non sint unde provident corporis reprehenderit numquam deserunt. Recusandae non culpa, accusamus vitae architecto dicta officia voluptatem in dolorem eligendi expedita mollitia, ullam officiis. Sapiente, dignissimos quis obcaecati adipisci odit possimus, commodi doloremque esse suscipit eum eos voluptas tempora excepturi alias quasi libero. Harum quasi nam expedita, corrupti veniam architecto rem quaerat aut nemo? Vero, omnis assumenda quo neque ut, ratione animi quos porro quidem voluptate laborum. Voluptatum fugiat impedit asperiores eos? Labore provident quos non earum numquam culpa possimus vel qui cupiditate voluptatem voluptatum animi tenetur, commodi delectus illum excepturi, odio magni aliquam enim vero sit quae quisquam. Ullam quia aperiam exercitationem cupiditate. Modi sunt doloremque nisi beatae quasi facere soluta veritatis saepe illum, sed perspiciatis, eaque nemo ea consequatur asperiores minus illo velit unde alias amet debitis sit! Autem nostrum similique, alias voluptas officia error sit amet. Fugiat vel dolores debitis eveniet aut reprehenderit voluptatem vero, dolorem nihil minus minima animi iusto eum, molestiae at quam ea corporis eos quidem! Nam optio dicta laboriosam quae dolor harum natus eos totam aut nihil impedit ex, velit a eum amet illum corrupti alias. Ratione asperiores cum, pariatur quod tempora illum enim animi odit dicta laudantium at nulla minima necessitatibus maiores ad odio non, numquam a nostrum sapiente quas distinctio! Ullam molestias ab laudantium voluptate quaerat. Sunt, quo maxime? Consequatur delectus maxime cupiditate tenetur itaque ducimus minima libero culpa suscipit dolor neque sit ab ipsum quo ea, sed voluptatem omnis dolorum maiores alias nemo! Corrupti minus magni explicabo neque. Molestias fugiat voluptates debitis perspiciatis inventore, eum voluptate cupiditate, asperiores accusamus voluptatibus quaerat fugit hic ab maxime illo aperiam magnam ut nobis quibusdam, doloremque aspernatur facere velit libero necessitatibus. Saepe, exercitationem deserunt.
            </p>
            <p>
                ToolTip浮動顯示圖片
                <a href='#'>
                    顯示圖片
                    <span className='ttpShow'>
                        <img src="./imges0429/p1.jpg" alt="" style={{ width: '100px' }} />
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </span>
                </a>
            </p>


        </>
    )
}

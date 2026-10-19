import react from './assets/react.svg'
import maria from './assets/maria.png'

function App(){
    const localStyle = {color:'white', backgroundColor:'green'}
    const imgStyle = {maxHeight:'50px'}
    return(<>
        <h2>React-스타일/스태틱</h2>
        <ol>
            <li className="hobby">취미</li>
            <ul>
                <li id="hobbySub">수영</li>
                <li className="warnings">헬스</li>
                <li style={{color:'white', backgroundColor:'blue'}}>여행</li>
                <li style={localStyle}>주짓수</li>
            </ul>

            <li style={{color:'red'}}>학습</li> {/*JavaScript 속성*/}
            <ul>
                <li><img src={react} style={{maxHeight:'20px'}}/></li>
                <li><img src={maria} style={imgStyle}/></li>
                <li><img src="http://nakja.co.kr/images/reactjs.png" style={imgStyle}/></li>
            </ul>
        </ol>
    </>)
}

export default App
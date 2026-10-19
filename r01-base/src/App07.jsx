import { useState } from "react"
import StudyComp2 from "./components/StudyComp2"
import HobbyComp2 from "./components/HobbyComp2"

function App(){
    const [mode, setMode] = useState('both') //단계1
    console.log(`mode: ${mode}`)

    const handleMode = (m) => {setMode(m)} //단계3

    let contents
    if(mode === 'study'){ //단계2
        contents = <StudyComp2 onSetMode={(m) => {setMode(m)}}/>
    }else if(mode == 'hobby'){
        contents = <HobbyComp2 onSetMode={handleMode}/>
    }else{
        contents = <>
            <StudyComp2 onSetMode={handleMode}/>
            <HobbyComp2 onSetMode={handleMode}/>
        </>
    }

    return(<>
        <h2><a href="/" onClick={event => {
            event.preventDefault()
            setMode('both')
        }}>React-state변경</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}

export default App
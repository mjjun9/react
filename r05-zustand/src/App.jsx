import {Routes, Route} from "react-router";
import TopNavi from "./components/TopNavi";
import Home from "./components/Home";
import OldComp from "./components/OldComp";
import NewComp from "./components/NewComp";

function App(){
  return(<>
    <TopNavi />
    <br />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/old" element={<OldComp/>} />
      <Route path="/new" element={<NewComp/>} />
    </Routes>
  </>)
}
export default App
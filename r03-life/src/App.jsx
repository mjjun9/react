import LifeCycle from "./components/LifeCycle";
import LocalFetcher from "./components/LocalFetcher";
import RemoteFetcher from "./components/RemoteFetcher";
import TopNavi from "./components/TopNavi"
import {Routes, Route} from "react-router";

function App(){
  return(<>
    <TopNavi />
    <Routes>
      <Route path='/' element={<LifeCycle/>} />
      <Route path='/local' element={<LocalFetcher/>} />
      <Route path='/remote' element={<RemoteFetcher/>} />
    </Routes>
  </>)
}
export default App
import { NavLink } from "react-router"

const TopNavi = () => {
  return(<nav>
    <NavLink to='/use-ref1'>useRef1</NavLink>&nbsp;&nbsp;&nbsp;
    <NavLink to='/use-ref2'>useRef2</NavLink>&nbsp;&nbsp;&nbsp;
    <NavLink to='/use-callback1'>useCallback1</NavLink>&nbsp;&nbsp;&nbsp;
    <NavLink to='/use-callback2'>useCallback2</NavLink>
  </nav>)
}

export default TopNavi
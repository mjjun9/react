import { Link, NavLink } from "react-router"

const TopNavi = () => {
  return(<>
    <a href='/'>Home</a>&nbsp;
    <NavLink to='/intro'>인트로</NavLink>&nbsp;
    <NavLink to='/intro/router'>Router Hook</NavLink>&nbsp;
    <Link to='/aaa'>잘못된 URL</Link>
  </>)
}
export default TopNavi
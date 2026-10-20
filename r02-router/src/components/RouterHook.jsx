import { useLocation, useSearchParams } from "react-router"

const RouterHook = () => {
  const location = useLocation()
  const[searchParams, setSearchParams] = useSearchParams()
  const mode = searchParams.get('mode')

  const changeMode = () =>{
    const nextMode = (mode === 'list') ? 'view':'list'
    setSearchParams({mode: nextMode})
  }
  return(<>
    <h2>Outlet 라우터훅</h2>
    <div>
      <ul>
        <li>URL: {location.pathname}</li>
        <li>쿼리스트링: {location.search}</li>
      </ul>
    </div>
    <button onClick={changeMode}>mode변경</button>
  </>)
}
export default RouterHook
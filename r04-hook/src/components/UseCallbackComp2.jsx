import React, { useCallback, useState } from "react"

//React.memo: props가 같으면 자식 컴포넌트의 재렌더링을 건너뛸 수 있음
//useCallback: 의존성이 같으면 이전 함수 참조를 재사용
const ChildComp = React.memo(({onClick}) => { 
  console.log('자식(ChildComp) 렌더링됨')
  return <button onClick={onClick}>자식버튼</button>
})

/*
  +버튼Click -> state(count)변경 -> '부모(UseCallbackComp1) 랜더링' 
   ->그러나, handleClick 최초1회만 생성 -> 자식(ChildComp)의 props변경인식X -> '자식(ChildComp) 랜더링'되지 않음
*/
const UseCallbackComp2 = () => { 
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('자식 버튼 클릭됨')
  }, []) //재렌더링 시 같은 함수 참조를 유지. 클릭할 때마다 함수 실행

  console.log('부모(UseCallbackComp2) 렌더링됨')

  return(<>
    <h2>useCallback을 사용한 예</h2>
    <p>
      count: {count}
      <button onClick={() => {setCount(count+1)}}>+</button><br/>
      <ChildComp onClick={handleClick}/>
    </p>
  </>)
}
export default UseCallbackComp2
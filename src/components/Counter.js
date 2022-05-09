import React, { useState } from "react";


// 상위 컴포넌트에서 정보를 받을 때 
// const Counter = () = > 여기 인자값에 props를 넣어주면 돼
// 예를들어 App.js 파일에서 <Counter click = 'click123'/>
// 이러면 저 정보를 props를 쓰면 받아진다
// 받았으면 써보자
// click = 'click123' 을 받았으니까 쓸때는 {props.click} 으로 쓴다.

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const incre = () => {
        setCount(count + 1)
    };
    // 같은 컴포넌트를 여러개 쓸 수 있잖아?
    // 근데 같은이름이지만 각각 안보내고 하나한테만 보낼경우
    // <Counter click='click123'/><Counter/><Counter/>
    // 이러면 첫번째만 받고 두,세번째는 받지못하잖아?
    // 하지만 세개의 같은 컴포넌트는 써야돼
    // 이럴경우 선언을 해줘
    // const clickString = props.click || 'Click'
    // 이런걸 default 값 설정이라도 한다~
    const clickString = props.click || 'Click짜가다'
    return (
        <div>
            <button onClick={incre}>
                {clickString}클릭{count}</button>
        </div>
    )
}

export default Counter
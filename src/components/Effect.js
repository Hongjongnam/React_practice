import React, { useEffect, useState } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    const [jongs, setJongs] = useState(0);
    useEffect(() => {
        console.log(count)
        console.log(jongs)
        console.log('핵심은 jongs증가 누를때 증가,감소 console.log가 찍히느냐 마느냐다')
    }, [jongs, count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <h1>{jongs}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
            <button onClick={() => setJongs(jongs + 1)}>jongs증가</button>
        </div>
    )
}

export default Effect;
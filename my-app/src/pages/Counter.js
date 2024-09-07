import React, { useState } from "react";

const Counter = () => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
        // num = num + 1과 같지만, num은 setNumber로 사용하기로 했기 때문에, 
        // setter 함수인 setNumber만을 사용해서 컨트롤 할 수 있음
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;
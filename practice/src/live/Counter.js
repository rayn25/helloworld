import React, { useState } from 'react';
import Title from './Title';

export default function Counter() {
    const [count, setCount] = useState({value: 0, value2: 0, value3: 0});
    const [count2, setCount2] = useState(0);
    function onClick() {
        //count.value += 1;
        //setCount(count);
        setCount({...count, value: count.value + 1});
    }
    function onClick2() {
        setCount2(count2 + 1);
    }
    return (
        <div>
            {count.value > 0 && <Title title={`현재 카운트: ${count.value}`} /> }
            <button onClick={onClick}>증가</button>
            <button onClick={onClick2}>증가2</button>
        </div>
    )
}
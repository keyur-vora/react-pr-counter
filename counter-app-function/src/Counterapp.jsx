import React from 'react';
import './counter.css'

const CounterApp =({cnt,inc,dec,re})=> {

    return (
        <div className="counter">
            <h1>Counter App</h1>
            <h2>{cnt}</h2>
            <div className="count">
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
                <button className="resetrbtn" onClick={re}>0</button>
            </div>
        </div>
    )

}

export default CounterApp;
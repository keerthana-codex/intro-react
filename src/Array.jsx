import React, { useState } from 'react'

function Array() {
    const [ logeedIn, setLoggedIn] = useState(false);
    const [ count, setCount] = useState(0);
    
    // const arr1 = [1,2,3,4];
    // const arr2 = [5,6,7,8];
    // const arr3 = [arr1,arr2];
    // const arr3 = [...arr1, ...arr2];
    // console.log(arr3)
    return (
        <div>
            <h1>Hi Everyone</h1>
            <button onClick={() => setLoggedIn(!logeedIn)}>
                {logeedIn ? "Hide Counter" : "Show Counter" }
            </button>
            {logeedIn ? (
                <>
                <p>Count : {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                </>
            ) :
            (
               "" 
            )}
        </div>
    )
}

export default Array

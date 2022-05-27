import React, { useState } from 'react'

export default function Counter({ title }) {
    let [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {title}
                </h1>
                <h3>
                    Counter : {count}
                </h3>
                <div className='flex space-x-4'>
                    <button className='px-1 py-1 bg-white text-black' onClick={() => { setCount(prev => prev + 1) }}>Increment</button>
                    <button className='px-1 py-1 bg-white text-black' onClick={() => { setCount(prev => prev - 1) }}>Decrement</button>
                </div>
            </header>
        </div>
    )
}

'use client';
import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

  return (
        <div className='flex flex-col gap-3 p-3 text-center'>
            <p> You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className='border border-white p-2 rounded-md  '>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)} className='border border-white p-2 rounded-md'>
                Decrement
            </button>
            <button onClick={() => setCount(0)} className='border border-white p-2 rounded-md'>
                Reset
            </button>
        </div>
    )
}

export default Counter
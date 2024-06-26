"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex w-[100px] items-center gap-5'>
      <button
        onClick={() => setCount(count + 1)}
        className='px-4 py-2 bg-blue-500 rounded-md'
      >
        Increment
      </button>
      <p className='text-blue-500 text-2xl'>{count}</p>
    </div>
  );
};
export default Counter;

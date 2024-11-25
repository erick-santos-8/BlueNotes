import React, { useState } from 'react'
import {BsPlus, BsXSquare} from 'react-icons/bs'


const TagInput = ({tags, setTags}) => {

  const [input, setInput] = useState('');
  const  handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div className='flex gap-2 items-center w-full'>
        <input type="text" placeholder="Adicionar Tag" className='input-box text-sm px-2 py-1 outline-none' onChange={handleInput} />
        <button className='text-2xl bg-blue-700 text-white rounded-md hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800 size-7'> <BsPlus /> </button>
      </div>
    </div>
  )
}

export default TagInput
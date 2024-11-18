import React from 'react'

import {BsSearch, BsX} from "react-icons/bs"

const SearchBar = ({value, onChange, handleSearch, clearSearch}) => {
  return (
    <div className='flex items-center bg-blue-100 dark:bg-gray-700 rounded-lg pr-2 md:w-96'>
      <input type="text" className="w-full h-10 px-2 md:px-4 text-sm md:text-md bg-blue-100 rounded-lg focus:outline-none focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Pesquisar"
        value={value}
        onChange={onChange}
      />

      {value && <BsX className='text-gray-500 dark:text-gray-400 text-xl cursor-pointer' onClick={clearSearch}/>}
      <BsSearch className='text-gray-500 md:mr-2 dark:text-gray-400 ml-2 text-xl cursor-pointer' onClick={handleSearch}/>
    </div>
  )
}

export default SearchBar
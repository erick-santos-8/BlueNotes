/* eslint-disable react/prop-types */
import {BsPinFill, BsPin, BsPencilFill, BsTrashFill} from "react-icons/bs"

const NoteCard = ({
    title,
    content,
    date,
    tags,
    isPinned,
    onPin,
    onEdit,
    onDelete
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md dark:bg-blue-950 bg-white dark:text-gray-100 text-gray-900 px-4 pt-2 pb-3 m-1 hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-gray-950 transition-all duration-200 ease-in-out">
      <div className='flex justify-between items-baseline'>
        <div className='flex-col items-center p-1'>
          <h1 className='font-sm'>  {title} </h1>
          <span className='text-xs opacity-70'> {date} </span>
        </div>
        {isPinned? <BsPinFill className='text-blue-700 dark:text-blue-200 cursor-pointer' onClick={onPin}/> : <BsPin className='text-blue-600 cursor-pointer' onClick={onPin}/>}
      </div>

      <p className="text-xs">{content}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 mr-2 text-xs rounded-full bg-blue-200 text-blue-950 dark:bg-blue-900 dark:text-gray-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end items-center font-sm gap-4">
          <BsPencilFill className='text-blue-300 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 cursor-pointer' onClick={onEdit}/>
          <BsTrashFill className='text-blue-300 dark:text-blue-300 hover:text-pink-800 dark:hover:text-pink-300 cursor-pointer' onClick={onDelete}/>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
import TagInput from '../../../components/modal/TagInput';


const EditAndCreateNote = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 p-4 bg-blue-50 dark:bg-gray-900 rounded-lg drop-shadow-lg shadow-md'>
      <div className='flex flex-col justify-center items-start gap-2 w-full'>
        <label className='text-lg font-bold text-gray-800 dark:text-gray-200'>Título</label>
        <input type="text" id="title" className='input-box w-full text-xl outline-none' placeholder='Estudar React' />
      </div>

      <div className='flex flex-col justify-center items-start gap-2 w-full'>
        <label className='text-lg font-bold text-gray-800 dark:text-gray-200'>Conteudo</label>
        <textarea id="content" className='input-box w-full text-xs outline-none' rows={10} placeholder='Estudar React'></textarea>
      </div>

      <div className='flex flex-col justify-center items-start gap-2 w-full'>
        <label className='text-lg font-bold text-gray-800 dark:text-gray-200'>Tags</label>
        <TagInput />
      </div>

      <button className='button-input-box'>Criar</button>

    </div>

    
      
  )
}

export default EditAndCreateNote
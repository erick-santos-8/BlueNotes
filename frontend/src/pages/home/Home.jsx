import { BsPlus } from 'react-icons/bs'
import NoteCard from '../../components/cards/NoteCard'

const Home = () => {
  return (
    <>
      <div className='container mx-auto m-2 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 drop-shadow-md'>
          <NoteCard title="Estudar React" date="19/11/2024" content="Estudar React, JavaScript e Node.js" tags={["React", "JavaScript", "Node.js"]} isPinned={true}
            onPin={() => {console.log("pin")}}
            onEdit={() => {console.log("edit")}}
            onDelete={() => {console.log("delete")}}
          />
          <NoteCard title="Estudar React" date="19/11/2024" content="Estudar React, JavaScript e Node.js" tags={["React", "JavaScript", "Node.js"]} isPinned={true}
            onPin={() => {console.log("pin")}}
            onEdit={() => {console.log("edit")}}
            onDelete={() => {console.log("delete")}}
          />
          <NoteCard title="Estudar React" date="19/11/2024" content="Estudar React, JavaScript e Node.js" tags={["React", "JavaScript", "Node.js"]} isPinned={true}
            onPin={() => {console.log("pin")}}
            onEdit={() => {console.log("edit")}}
            onDelete={() => {console.log("delete")}}
          />
          <NoteCard title="Estudar React" date="19/11/2024" content="Estudar React, JavaScript e Node.js" tags={["React", "JavaScript", "Node.js"]} isPinned={true}
            onPin={() => {console.log("pin")}}
            onEdit={() => {console.log("edit")}}
            onDelete={() => {console.log("delete")}}
          />
          <NoteCard title="Estudar React" date="19/11/2024" content="Estudar React, JavaScript e Node.js" tags={["React", "JavaScript", "Node.js"]} isPinned={true}
            onPin={() => {console.log("pin")}}
            onEdit={() => {console.log("edit")}}
            onDelete={() => {console.log("delete")}}
          />
        </div>
      </div>

      <button onClick={() => {console.log("click")}} className="bg-blue-700 dark:bg-blue-200 dark:text-blue-950 text-white rounded-full px-4 py-4 text-sm hover:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-200 ease-in-out fixed bottom-5 right-5">
        <BsPlus className='text-2xl' />
      </button>
    </>
  )
}


export default Home
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {BsPencilFill} from "react-icons/bs"
import SearchBar from "./searchBar/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    console.log(e.target.value);
  }

  const clearSearch = () => {
    setSearchString('');
  }

  return (
    <div className='dark:bg-gray-900 bg-blue-50 dark:text-gray-100 text-gray-900 flex justify-between items-center h-16 px-4 py-2 drop-shadow'>  
      <div className="flex items-center text-lg md:text-2xl">        
        <BsPencilFill/>
        <h1 className='font-bold hidden sm:inline underline mr-3'> BluNotes</h1>
        <h1 className='font-bold inline sm:hidden underline mr-3'> BluN</h1>
      </div>

        <SearchBar value={searchString} onChange={(e) => setSearchString(e.target.value)} handleSearch={handleSearch} clearSearch={clearSearch}/>

        <div className="relative ml-3">
          <div>
            <button type="button" onClick={() => { setIsOpen(!isOpen)}} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="https://ui-avatars.com/api/?name=Elon+Musk&background=2563eb&color=FFFFFF&rounded=true" alt="" />  
            </button>
          </div>
          {isOpen && 
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-blue-950 dark:text-gray-100 " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900 rounded-t-md "  tabIndex="-1" id="user-menu-item-0">Perfil</a>
            <button onClick={()=>{navigate("/login")}} className="w-full text-left block px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900 rounded-b-md" tabIndex="-1" id="user-menu-item-2">Sair</button>
          </div> 
          }
      </div>
    </div>


  )
}
export default Navbar
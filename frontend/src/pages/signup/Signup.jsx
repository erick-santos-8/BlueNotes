import { useState } from 'react';
import {Link} from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';

import {validateEmail} from '../../utils/EmailValidation'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      toast.error('Email inválido');
      return;
    }

    if(password.length < 8){
      toast.error('Senha inválida!')
      return;
    }
  }


  return (
      <div className='flex justify-center items-center h-[90vh] p-2 shadow-sm dark:bg-gray-900 bg-blue-50'>
        <div className='w-full md:w-[28rem] h-[28.5rem] bg-gray-100 dark:bg-blue-950 rounded-lg shadow-2xl drop-shadow p-4'>     
          <h1 className='text-4xl md:text-6xl font-bold text-center dark:text-gray-100 text-gray-900 mb-2'>Cadastro</h1> 
          
          <form className="max-w-sm mx-auto mb-2" onSubmit={handleSubmit} >
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
              <input type="name" id="name" className="input-box" placeholder="Digite o seu nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required 
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
              <input type="email" id="email" className='input-box' placeholder="Digite o seu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha:</label>
              <input type="password" id="password" className="input-box" placeholder='Digite a sua senha' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              />
            </div>
            <div className='flex justify-center w-full'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full mt-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar conta</button>
            </div>
          </form>


          <Link to={"/login"} className='text-center text-blue-950 dark:text-blue-100 hover:underline p-4'>Já possui uma conta? Entre</Link>
        </div>
      </div>
  )
}

export default Signup
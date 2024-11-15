import { useState } from 'react'
import {Link} from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';

import { validateEmail } from '../../utils/EmailValidation'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

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
        <div className='w-full md:w-[28rem]  h-[23rem] bg-gray-100 dark:bg-blue-950 rounded-lg shadow-2xl drop-shadow p-4'>     
          <h1 className='text-4xl md:text-6xl font-bold text-center dark:text-gray-100 text-gray-900 mb-2'>Login</h1> 
          

          <form className="max-w-sm mx-auto mb-2" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
              <input type="text" id="email"  placeholder="Digite o seu email" className='input-box' 
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
              required />
            </div>
            <div className='flex justify-center w-full'>
              <button type="submit" className="button-input-box">Entrar</button>
            </div>
          </form>


          <Link to={"/signup"} className='text-center text-blue-950 dark:text-blue-100 hover:underline p-4'>Não possui uma conta? Cadastre-se</Link>
        </div>
      </div>
  )
}

export default Login
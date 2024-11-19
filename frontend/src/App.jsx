import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'

import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='w-screen h-screen dark:bg-gray-900 bg-blue-50'>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
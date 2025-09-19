import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Landing from './components/Landing'

function App() {
const[users,setusers]=useState([{u_name:"Nisha",u_pass:"123"}])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing></Landing>}></Route>
        <Route path='/' element={<Login users={users}></Login>}></Route>
        <Route path='/signup' element={<SignUp users={users} setusers={setusers}></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

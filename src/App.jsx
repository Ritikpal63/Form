import { Routes, Route, Navigate } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import EmployeeData from './components/EmployeeData'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<EmployeeData />} />
        {/* <Route path='/' element={<Navigate to="/signin" replace />} /> */}
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard onLogout={() => window.location.href = '/signin'} />} />
      </Routes>
      
    </>
  )
}

export default App
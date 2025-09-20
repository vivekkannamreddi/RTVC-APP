import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import Security from './pages/Security.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/auth' element={<Security/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App

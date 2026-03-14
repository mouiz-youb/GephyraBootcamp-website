import './App.css'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MainLayout from './Layout/MainLayout'
function App() {
  return (
    <>
    <Routes>
      <Route  element={<MainLayout />} >
        <Route path='/' element={<LandingPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

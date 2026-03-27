import './App.css'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MainLayout from './Layout/MainLayout'
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster position="top-center"/>
    <Routes>
      <Route  element={<MainLayout />} >
        <Route path='/' element={<LandingPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

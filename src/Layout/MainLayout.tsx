import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
function MainLayout() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <Navbar />
      <main className="flex justify-center items-center flex-col border w-full mt-20 ">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

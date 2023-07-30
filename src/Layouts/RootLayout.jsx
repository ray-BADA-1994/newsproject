import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Sidebar } from "../components/Sidebar"
import { useMenuContext } from "../context/MenuContext"


export default function RootLayout() {

  const {showSideBar} = useMenuContext()

  return (
    <div className="flex xs:flex relative flex-row">
      <Sidebar/>
      {/* <div className={`bg-black transition-all sticky top-0 h-[100vh] ${showSideBar ? 'w-[300px]' : 'w-0'}`}>

      </div> */}
      <div className={` min-h-[100vh] h-full flex-1 ${showSideBar && 'translate-x-[150px]'} md:translate-x-0 px-[5%]  mx-auto  transition-all`}>
       <Navbar/>

       <main className={`mb-20 ${showSideBar && 'pointer-events-none'}`}
        >
        <Outlet />
       </main>
       <Footer /> 

     </div>
    </div>
  )
}

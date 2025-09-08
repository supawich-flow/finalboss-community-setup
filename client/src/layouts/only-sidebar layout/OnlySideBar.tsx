import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"

export default function OnlySideBar() {
  return (
        <div className="flex min-h-screen">
            <aside className="w-80">
                <Sidebar/>
            </aside>
            
            <main className="flex-1">
                <Outlet />
            </main>
        
        </div>
  )
}

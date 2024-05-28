import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div className="bg-[#4A1FB8] py-3">
      <Header />
      <Outlet />
      <h2>Footer</h2>
    </div>
  )
}

export default AppLayout;

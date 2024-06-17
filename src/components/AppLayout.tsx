import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="bg-[#4A1FB8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout;

import { Outlet, useLocation, useParams } from "react-router-dom"
import DashBoardMenu from "./DashBoardMenu"
import DashBoardHeader from "./DashBoardHeader";

const DashBoardLayout = () => {
  const { hash, pathname } = useLocation();
  // console.log(pathname);
  let headerText = ''
  
 switch(pathname) {
  case '/dashboard':
    headerText = 'dashboard';
    break;
  default:
    headerText = ''
 }
 
  return (
    <div>
     <DashBoardHeader headerText={headerText} />
     <div>
      <DashBoardMenu />
      <Outlet />
     </div>
    
    </div>
  )
}

export default DashBoardLayout
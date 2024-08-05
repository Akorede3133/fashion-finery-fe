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
    case '/wishlist':
      headerText = 'wishlist';
      break;
    case '/order-tracking':
      headerText = 'order tracking';
      break;
    default:
      headerText = ''
 }
 
  return (
    <div className="lg:pb-10 mx-auto">
     <DashBoardHeader headerText={headerText} />
     <div className="lg:grid grid-cols-[1fr_2.5fr] w-[90% mx-auto gap-4">
      <DashBoardMenu path={headerText} />
      <Outlet />
     </div>
    </div>
  )
}

export default DashBoardLayout
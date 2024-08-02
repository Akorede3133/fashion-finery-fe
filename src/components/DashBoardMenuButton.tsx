import { useLocation } from "react-router-dom"

type DashBoardMenuButtonProp = {
  icon: React.ReactElement;
  text:string;
  action: () => void;
  pathId: string;
}
const DashBoardMenuButton = ({ icon, text, action, pathId }: DashBoardMenuButtonProp) => {
  const { pathname } = useLocation();
  return (
    <li>
      <button className={`flex gap-2 items-center border-y-[1px] border-neutral-gray-4 w-full p-3 ${pathname.includes(pathId) && 'bg-tint-5'}`} onClick={action}>
        {icon}
        <span className={`capitalize ${pathname.includes(pathId) && 'text-tint-1'}`}>{text}</span>
      </button>
    </li>
  )
}

export default DashBoardMenuButton
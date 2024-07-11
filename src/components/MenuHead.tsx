import { HiOutlineXMark } from "react-icons/hi2"

const MenuHead = ({ closeMenu, text }: { closeMenu: () => void, text: string }) => {
  return (
    <div>
      <div className=" flex justify-between bg-tint-5 mt-[10px] mb-[3px] p-3">
        <h3 className="text-xl uppercase">{text}</h3>
        <button onClick={closeMenu}>
          <HiOutlineXMark className=" text-xl" />
        </button>
      </div>
      <div className="grid grid-cols-2 bg-white">
        <button className=" bg-white py-3 font-plus-jakarta rounded-[4px]">
          <span className="border-b-2 border-primary-black capitalize ">women</span>
        </button>
        <button className=" bg-tint-5 rounded-[4px]">
          <span className=" border-primary-black capitalize ">men</span>
        </button>
      </div>
    </div>
  )
}

export default MenuHead
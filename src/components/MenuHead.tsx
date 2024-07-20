import PageHead from "./PageHead"

const MenuHead = ({ closeMenu, text }: { closeMenu: () => void, text: string }) => {
  return (
    <div>
     <PageHead closeMenu={closeMenu} text={text} />
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
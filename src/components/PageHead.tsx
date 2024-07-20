import { HiOutlineXMark } from 'react-icons/hi2'

const PageHead = ({ closeMenu, text }: { closeMenu: () => void; text: string }) => {
  return (
    <div className=" flex justify-between bg-tint-5 mt-[10px] mb-[3px] p-3">
      <h3 className="text-xl uppercase">{text}</h3>
      <button onClick={closeMenu}>
        <HiOutlineXMark className=" text-xl" />
      </button>
    </div>
  )
}

export default PageHead
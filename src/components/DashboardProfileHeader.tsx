import { BiDownload } from "react-icons/bi"
import avatar from '../assets/men/men_menu_picture.png'

const DashboardProfileHeader = () => {
  return (
    <>
      <div>
        <div className=' relative sm:hidden bg-tint-5 flex justify-center h-[80px]'>
          <div className='w-[93px] h-[93px] rounded-full border-2 border-tint-3 absolute top-[15%] left-[50%] translate-x-[-50%]'>
            <img src={avatar} alt="" className='rounded-full h-full w-full' />
            <button className=' absolute bottom-[10px] right-[-5px] bg-white border-l-2 border-t-2 border-tint-3 mr-[8px] mb-[-3px]'>
              <BiDownload  />
            </button>
          </div>
        </div>
        <p  className=' border-b sm:hidden border-neutral-gray-5 text-center pb-1 font-bold text-xl mt-8'>Maah</p>
     </div>
     <div className='hidden sm:grid grid-cols-[1fr_3fr] relative items-center'>
      <div className='w-[180px] h-[180px] rounded-full border-2 border-tint-3 relative'>
        <img src={avatar} alt="" className='rounded-full h-full w-full' />
        <button className='absolute bottom-[15px] right-[5px] bg-white border-l-2 border-t-2 border-tint-3 mr-[13px]'>
          <BiDownload  />
        </button>
      </div>
      <p  className=' border-b border-neutral-gray-5 w-full pb-1 self-end font-bold text-[2rem]'>Maah</p>
    </div>
    </>
   
  )
}

export default DashboardProfileHeader
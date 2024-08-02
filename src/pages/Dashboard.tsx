import { BiDownload } from 'react-icons/bi'
import avatar from '../assets/men/men_menu_picture.png'
import { HiCheck } from 'react-icons/hi2'
const Dashboard = () => {
  return (
    <div className=" pb-24">
      <div className=' relative bg-tint-5 flex justify-center h-[80px]'>
        <div className='w-[93px] h-[93px] rounded-full border-2 border-tint-3 absolute top-[15%] left-[50%] translate-x-[-50%]'>
          <img src={avatar} alt="" className='rounded-full h-full w-full' />
          <button className=' absolute bottom-[10px] right-[-5px] bg-white border-l-2 border-t-2 border-tint-3 mr-[8px] mb-[-3px]'>
            <BiDownload  />
          </button>
        </div>
      </div>
      <div>
        <p  className=' border-b border-neutral-gray-5 mt-8 text-center pb-1'>Maah</p>
        <p className=' font-bold'>Hello mahnaz (not mahnaz? Log out)</p>
        <p className=' capitalize text-sm'>manage subscriptions</p>
        <section className=' py-6'>
          <h4 className=' capitalize pb-[9px]'>order history</h4>
          <div className=' border-2 border-srate-success-1 flex p-5 rounded-[4px] gap-2'>
            <HiCheck className=' text-2xl text-srate-success-1' />
            <p>
              <span className=' uppercase text-srate-success-1'>make your first order.</span>
              <span className=''>You haven't placed any orders yet.</span>
            </p>
          </div>
        </section>
        <section>
          <h4 className=' font-semibold'>Account details:</h4>
          <ul>
            <li className=' grid grid-cols-[1fr_4fr] gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2'>Name:</p>
              <p>Mahnaz</p>
            </li>
            <li className=' grid grid-cols-[1fr_4fr] gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2'>E-mail:</p>
              <p>Mahnaz-1402@gmail.com</p>
            </li>
            <li className=' grid grid-cols-[1fr_4fr] gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2 '>Address:</p>
              <p>15, dangote road off sango</p>
            </li>
          </ul>
          <div className=' flex justify-end py-8'>
            <button className=' border-2 border-primary-black rounded-md py-3 px-20'>Edit</button>
          </div>
        </section>
       
      </div>

    </div>
  )
}

export default Dashboard
import { HiCheck } from 'react-icons/hi2'
import DashboardProfileHeader from '../components/DashboardProfileHeader'
const Dashboard = () => {
  return (
    <div className=" pb-24 lg:border-l-[1px] lg:pl-20 lg:pb-0 w-[90%] mx-auto">
      <DashboardProfileHeader />
      <div className='pt-3 lg:pt-8'>
        <div>
          <p className=' font-bold'>Hello mahnaz (not mahnaz? Log out)</p>
          <p className=' capitalize text-sm pt-3'>manage subscriptions</p>
        </div>
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
            <li className='flex gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2 w-[100px]'>Name:</p>
              <p>Mahnaz</p>
            </li>
            <li className=' flex gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2 w-[100px]'>E-mail:</p>
              <p>Mahnaz-1402@gmail.com</p>
            </li>
            <li className='flex gap-4 items-center border-b-2 p-2'>
              <p className=' border-r-2 pr-5 p-2 w-[100px] '>Address:</p>
              <p>15, dangote road off sango</p>
            </li>
          </ul>
          <div className=' flex justify-end py-8 lg:py-4'>
            <button className=' border-2 border-primary-black rounded-md py-3 px-20 lg:px-10'>Edit</button>
          </div>
        </section>
       
      </div>
    </div>
  )
}

export default Dashboard
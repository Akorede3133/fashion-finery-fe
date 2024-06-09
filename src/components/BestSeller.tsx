import { HiChevronRight, HiOutlineChevronRight } from 'react-icons/hi2'
import womenBestSellerImg1 from '../assets/women/women_best_seller1.png'

import womenBestSellerImg2 from '../assets/women/women_best_seller2.png'
import womenBestSellerImg3 from '../assets/women/women_best_seller3.png'
import womenBestSellerImg4 from '../assets/women/women_best_seller4.png'
import { MdStarRate } from 'react-icons/md'

const BestSeller = () => {
  return (
    <div className=' bg-tint-5 mt-10'>
      <div className='w-[90%] mx-auto'>
        <h3 className=" text-2xl font-plus-jakarta py-6">
          Best seller <br />
          product
        </h3>
        <div className='grid grid-cols-[.5fr_.5fr_1.65fr] sm:grid-cols-[1fr_1fr_1fr_3fr] items-center gap-4 sm:gap-6 w-full'>
          <div className=' hidden sm:block h-[289px] w-full sm:w-auto  sm:h-[650px] rounded-md'>
            <img src={womenBestSellerImg1} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px] w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-full sm:w-auto  sm:h-[650px] rounded-md'>
            <img src={womenBestSellerImg2} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px]  w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-full sm:w-auto sm:h-[650px]'>
            <img src={womenBestSellerImg3} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px] w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-full sm:w-auto sm:h-[650px]'>
            <img src={womenBestSellerImg4} alt="Best seller product" className='h-[220px] sm:h-[600px] object-cover w-full rounded-lg' />
            <div className='flex flex-col sm:flex-row gap- justify-between py-2'>
              <ul className='flex gap-1'>
                {
                  [1, 2, 3, 4].map((item) => (
                    <li>
                      <MdStarRate key={item} className=' text-[#ffc000] text-xl' />
                    </li>
                  ))
                }
                
              </ul>
              <h4 className=' capitalize font-plus-jakarta text-sm'>Madison fashion</h4>
              <span className=' font-plus-jakarta text-sm'>120 &#36;</span>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='flex flex-col py-2 sm:py-6 gap-3'>
          <p className=' text-[0.75rem] sm:text-[1.15rem] font-plus-jakarta'>Madison Utendahl and Lex Kendall set out to prov e they could throw a NewYork City <br className='hidden sm:block' /> engagement party where every. </p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold self-end rounded-md">
            <span>view more</span>
            <HiChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
   
    </div>
  )
}

export default BestSeller

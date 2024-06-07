import womenBestSellerImg1 from '../assets/women/women_best_seller1.png'

import womenBestSellerImg2 from '../assets/women/women_best_seller2.png'
import womenBestSellerImg3 from '../assets/women/women_best_seller3.png'
import womenBestSellerImg4 from '../assets/women/women_best_seller4.png'

const BestSeller = () => {
  return (
    <div className=' bg-tint-5'>
      <div className='w-[90%] mx-auto bg-red-500'>
        <h3 className=" text-2xl font-plus-jakarta">
          Best seller <br />
          product
        </h3>
        <div className='fle grid grid-cols-3 sm:grid-cols-4 items-center gap-4 sm:gap-6 w-full'>
          <div className=' hidden sm:block h-[289px] w-ful sm:w-aut  sm:h-[650px] rounded-md'>
            <img src={womenBestSellerImg1} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px] w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-ful sm:w-aut  sm:h-[650px] rounded-md'>
            <img src={womenBestSellerImg2} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px]  w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-ful  sm:w-auo sm:h-[650px]'>
            <img src={womenBestSellerImg3} alt="Best seller product" className='object-cover h-[220px] sm:h-[600px]  w-full rounded-lg' />
          </div>
          <div className='h-[289px] w-ful sm:w-auo  sm:h-[650px]'>
            <img src={womenBestSellerImg4} alt="Best seller product" className='h-[220px] sm:h-[600px] object-cover w-full rounded-lg' />
            <p>Hello</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
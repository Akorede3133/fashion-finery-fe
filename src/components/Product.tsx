import { HiOutlineChevronRight } from 'react-icons/hi2';
import womenProduct1 from '../assets/women/women_product_1.png';
import womenProduct2 from '../assets/women/women_product_2.png';
import womenProduct3 from '../assets/women/women_product_3.png';


const Product = () => {
  return (
    <div className='w-[90%] mx-auto mt-10'>
      <h3 className=' text-center text-2xl font-plus-jakarta py-4'>Product</h3>
      <div className='flex lg:justify-center lg:gap-6 relative my-10'>
        <div>
          <img src={womenProduct1} alt="women product" className=' object-cover rounded-md' />
        </div>
        <div className='ml-[-55px] lg:ml-0 mr-[-55px] lg:mr-0 z-20 mt-[-40px] lg:mt- mb-[-40px] lg:mt-[-45px] lg:mb-[-88px] lg:mb- '>
          <img src={womenProduct2} alt="women product" className=' object-cover rounded-md' />
        </div>
        <div>
          <img src={womenProduct3} alt="women product" className=' object-cover rounded-md' />
        </div>
      </div>
      <div className='flex justify-center lg:py-20'>
        <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
          <span>view more</span>
          <HiOutlineChevronRight className=" text-shade-5" />
        </button>
      </div>   
    </div>
  )
}

export default Product

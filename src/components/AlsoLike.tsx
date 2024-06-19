import like1 from '../assets/unisex/also_like_1.png';
import like2 from '../assets/unisex/also_like_2.png'
import like3 from '../assets/unisex/also_like_3.png'

const AlsoLike = () => {
  return (
    <div className=" bg-neutral-gray-12 sm:bg-tint-5 py-6 sm:py-14">
      <div className='w-[90%] mx-auto'>
        <h3 className=" text-[1.125rem] font-medium font-plus-jakarta uppercase sm:text-[3rem]">You may also like</h3>
        <div className='sm:pt-10'>
          <h4 className="font-plus-jakarta text-white sm:text-primary-black capitalize sm:text-center text-xl sm:text-[2rem] pb-5 pt-1 sm:p-0">Madison fashion</h4>
          <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            <li>
              <img src={like1} alt="" />
              <p className='py-2 sm:py-6 text-sm text-white text-center sm:text-primary-black capitalize sm:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
            <li className='flex flex-col'>
              <img src={like2} alt="" className=' object-cover order-2' />
              <p className=' text-center py-2 sm:py-0 text-sm text-white sm:text-primary-black  capitalize sm:invisible'>flowy set dress</p>
              <p className=' text-center py-2 sm:py-6 text-sm text-white sm:text-primary-black  capitalize hidden sm:block order-3 sm:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
            <li className='sm:flex flex-col hidden'>
              <img src={like3} alt="" className=' object-cover' />
              <p className=' text-center py-2 sm:py-6 text-sm text-white sm:text-primary-black capitalize sm:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
          </ul>
        </div>
        <p className='text-xl hidden sm:block text-center pt-20'>Business Management Consulting Boutique for Lifestyle Brands</p>
      </div>
    </div>
  )
}

export default AlsoLike
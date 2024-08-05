import like1 from '../assets/unisex/also_like_1.png';
import like2 from '../assets/unisex/also_like_2.png'
import like3 from '../assets/unisex/also_like_3.png'

const AlsoLike = () => {
  return (
    <div className=" bg-neutral-gray-12 lg:bg-tint-5 py-6 lg:py-14">
      <div className='w-[90%] mx-auto'>
        <h3 className=" text-[1.125rem] font-medium font-plus-jakarta uppercase lg:text-[3rem]">You may also like</h3>
        <div className='lg:pt-10'>
          <h4 className="font-plus-jakarta text-white lg:text-primary-black capitalize lg:text-center text-xl lg:text-[2rem] pb-5 pt-1 lg:p-0">Madison fashion</h4>
          <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <li>
              <img src={like1} alt="" />
              <p className='py-2 lg:py-6 text-sm text-white text-center lg:text-primary-black capitalize lg:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
            <li className='flex flex-col'>
              <img src={like2} alt="" className=' object-cover order-2' />
              <p className=' text-center py-2 lg:py-0 text-sm text-white lg:text-primary-black  capitalize lg:invisible'>flowy set dress</p>
              <p className=' text-center py-2 lg:py-6 text-sm text-white lg:text-primary-black  capitalize hidden lg:block order-3 lg:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
            <li className='lg:flex flex-col hidden'>
              <img src={like3} alt="" className=' object-cover' />
              <p className=' text-center py-2 lg:py-6 text-sm text-white lg:text-primary-black capitalize lg:text-xl font-plus-jakarta'>flowy set dress</p>
            </li>
          </ul>
        </div>
        <p className='text-xl hidden lg:block text-center pt-20'>Business Management Consulting Boutique for Lifestyle Brands</p>
      </div>
    </div>
  )
}

export default AlsoLike
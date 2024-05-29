import img1 from '../assets/women/women_shop_1.png'
import img2 from '../assets/women/women_shop_2.png'
import img3 from '../assets/women/women_shop_3.png'


const Collection = () => {
  return (
    <div className='w-[90%] mx-auto overflow-hidden h-full'>
      <h2 className='text-center text-2xl py-3 font-plus-jakarta font-medium'>Shop by Collection</h2>
      <div className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
        <img src={img1} alt="women-shop-1" className='w-full h-auto object-cover rounded-md' />
        <img src={img2} alt="women-shop-1" className='w-full  h-auto object-cover rounded-md'/>
        <img src={img3} alt="women-shop-1" className='w-full hidden sm:block h-auto object-cover rounded-md'/>


      </div>
    </div>
  )
}

export default Collection

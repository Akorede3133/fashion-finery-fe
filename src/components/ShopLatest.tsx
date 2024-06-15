import { womenLatest } from '../utils/shopLatest';
import ShopLatestCard from './ShopLatestCard';
const ShopLatest = () => {
  return (
    <div className='w-[90%] mx-auto mt-10'>
      <h3 className='text-[1.125rem] pb-[0.75rem] sm:text-[2rem] capitalize font-plus-jakarta '>Shop the latest</h3>
      <ul className=' grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {
          womenLatest.map((latest, index) => (
            <ShopLatestCard latest={latest} index={index} />
          ))
        }
      </ul>
    </div>
  )
}

export default ShopLatest
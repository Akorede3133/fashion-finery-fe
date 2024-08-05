import { HiOutlineHeart } from "react-icons/hi2"

const ShopLatestCard = ({ latest, index }) => {
  return (
    <li className={`${(index === 2 || index === 3) && 'hidden'} lg:block`}>
      <div className=' relative'>
        <img src={latest.image} alt="Women shop latest" className=' object-cover' />
        <div className=' w-full p-3 items-center flex justify-between absolute top-0'>
          <span className=' bg-srate-error-1 rounded-full px-2 py-[2px] text-neutral-200 text-sm'>%20</span>
          <button>
            <HiOutlineHeart className=' text-xl ' />
          </button>
        </div>
      </div>
      <div className=' text-center font-plus-jakarta py-1'>
        <h3 className='text-[1.125rem] lg:text-xl font-normal capitalize'>{latest.name}</h3>
        <p className='space-x-3'>
          <span className=' line-through text-neutral-gray-9 text-sm lg:text-base'>$363.00</span>
          <span className=' text-srate-error-1 text-sm'>$295.00</span>
        </p>
      </div>
    </li>
  )
}

export default ShopLatestCard
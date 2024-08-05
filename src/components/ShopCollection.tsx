import { womenCollection } from '../utils/shopCollection'

const ShopCollection = () => {
  return (
    <div className='w-[90%] mx-auto'>
       <h2 className='text-center text-2xl lg:pt-14 lg:pb-10 py-3 font-plus-jakarta font-medium'>Shop by Collection</h2>
      <ul className=' grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          womenCollection.map((col, index) => (
            <li className='relative' key={index}>
              <img src={col.img} alt={col.alt} className={`w-full h-auto object-cover rounded-md ${index === 2 && 'hidden lg:block' }`} />
              <button className={`bg-white text-neutral-black-5 font-semibold font-plus-jakarta capitalize left-[50%] translate-x-[-50%] w-[80%] py-3 absolute bottom-5 rounded-lg ${index === 2 && 'hidden lg:block' }`}>shop now</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ShopCollection
import { womenCollection } from '../utils/shopCollection'


const Collection = () => {
  return (
    <div className='w-[90%] mx-auto overflow-hidden h-full'>
      <h2 className='text-center text-2xl py-3 font-plus-jakarta font-medium'>Shop by Collection</h2>
      <ul className=' grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {
          womenCollection.map((col, index) => (
            <li>
              <img src={col.img} alt={col.alt} className={`w-full h-auto object-cover rounded-md ${index === 2 && 'hidden sm:block' }`} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Collection

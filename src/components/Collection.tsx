import CoatCollection from "./CoatCollection"
import ShopCollection from "./ShopCollection"

const Collection = () => {
  return (
    <section className='w-[90%] mx-auto overflow-hidden h-full'>
      <ShopCollection />
      <CoatCollection />
    </section>
  )
}

export default Collection


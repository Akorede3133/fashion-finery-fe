import CoatCollection from "./CoatCollection"
import CssCollection from "./CssCollection"
import ShopCollection from "./ShopCollection"

const Collection = () => {
  return (
    <section className='w-[90%] mx-auto overflow-hidden h-full'>
      <ShopCollection />
      <CoatCollection />
      <CssCollection />
    </section>
  )
}

export default Collection


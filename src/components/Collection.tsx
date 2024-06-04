import CoatCollection from "./CoatCollection"
import CssCollection from "./CssCollection"
import CupcCollection from "./CupcCollection"
import ShopCollection from "./ShopCollection"

const Collection = () => {
  return (
    <section className='w-[90%] mx-auto overflow-hidden h-full'>
      <ShopCollection />
      <CoatCollection />
      <CssCollection />
      <CupcCollection />
    </section>
  )
}

export default Collection


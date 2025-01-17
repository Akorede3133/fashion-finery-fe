import CoatCollection from "./CoatCollection"
import CssCollection from "./CssCollection"
import CupcCollection from "./CupcCollection"
import ShopCollection from "./ShopCollection"

const Collections = () => {
  return (
    <div className='w-[90% mx-aut overflow-hidden h-full'>
      <ShopCollection />
      <section className="lg:space-y-[2.5rem] lg:pt-[7.75rem] w-[90%] mx-auto">
        <CoatCollection />
        <CssCollection />
        <CupcCollection />
      </section>
    </div>
  )
}

export default Collections


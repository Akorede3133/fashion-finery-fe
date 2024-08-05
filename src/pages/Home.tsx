import AlsoLike from "../components/AlsoLike"
import BestSeller from "../components/BestSeller"
import Collection from "../components/Collections"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrivals"
import Product from "../components/Product"
import Sale from "../components/Sale"
import ShopLatest from "../components/ShopLatest"

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <BestSeller />
      <Product />
      <Sale />
      <ShopLatest />
      <NewArrival />
      <AlsoLike />
      <div>
        <div className=" bg-white pt-10">
          <h3 className=" capitalize text-xl text-neutral-gray-11 text-center pb-4 pt- ">get exclusive offers</h3>
        </div>
        <div className="flex lg:justify-center gap-4 items-center pb-16 w-[90%] mx-auto">
          <input type="email" placeholder="Email Address" className=" border border-neutral-gray-1 px-4 py-2 rounded-md text-primary-black placeholder:text-primary-black placeholder:font-semibold outline-none w-[70%] lg:w-[40%]" />
          <button className=" border border-shade-4 py-2 px-4 rounded-md text-shade-4 font-semibold capitalize w-[30%] lg:w-auto">sign up</button>
        </div>
      </div>
    </>
  )
}

export default Home
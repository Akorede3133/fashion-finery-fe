import { useState } from "react"
import { HiOutlineHeart } from "react-icons/hi2"

const Wishlists = () => {
  // const [Wishlists, setWishLists] = useState
  return (
    <div className=" pb-24 sm:border-l-[1px] sm:pl-20 sm:pb-0">
      <section className=" flex flex-col items-center justify-center gap-6">
        <HiOutlineHeart className=" text-3xl" />
        <h4 className=" uppercase text-2xl font-bold">wishlist is empty</h4>
        <p className=" text-sm text-center">You don&apos;t have any products in the wishlist yet. You will find a lot of interesting productson our <q>shop</q> page.</p>
        <button className=" px-5 py-2 border border-primary-black rounded-md capitalize font-semibold">return to shop</button>
      </section>
    </div>
  )
}

export default Wishlists
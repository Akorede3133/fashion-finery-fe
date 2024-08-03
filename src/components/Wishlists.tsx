import { useState } from "react"
import EmpyWishlist from "./EmpyWishlist";
import NonEmptyWishlist from "./NonEmptyWishlist";


const Wishlists = () => {
  const [wishlists] = useState(true);

  
  return (
    <div className=" pb-24 sm:border-l-[1px] sm:pl-20 sm:pb-0">
     { !wishlists ? <EmpyWishlist /> : <NonEmptyWishlist  /> }
     
    </div>
  )
}

export default Wishlists
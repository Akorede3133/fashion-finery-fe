import { useState } from "react"
import EmpyWishlist from "./EmpyWishlist";
import NonEmptyWishlist from "./NonEmptyWishlist";


const Wishlists = () => {
  const [wishlists] = useState(true);

  
  return (
    <div className=" pb-24 lg:border-l-[1px] lg:pl-20 lg:pb-0">
     { !wishlists ? <EmpyWishlist /> : <NonEmptyWishlist  /> }
     
    </div>
  )
}

export default Wishlists
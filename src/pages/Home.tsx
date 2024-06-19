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
    </>
  )
}

export default Home
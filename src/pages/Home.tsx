import BestSeller from "../components/BestSeller"
import Collection from "../components/Collections"
import Hero from "../components/Hero"
import Product from "../components/Product"
import Sale from "../components/Sale"

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <BestSeller />
      <Product />
      <Sale />
    </>
  )
}

export default Home
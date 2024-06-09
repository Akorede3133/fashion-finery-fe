import BestSeller from "../components/BestSeller"
import Collection from "../components/Collections"
import Hero from "../components/Hero"
import Product from "../components/Product"

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <BestSeller />
      <Product />
    </>
  )
}

export default Home
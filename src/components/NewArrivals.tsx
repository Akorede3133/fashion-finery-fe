import { womenArrival } from '../utils/newArrivals';
import Shop from './Shop';
const NewArrival = () => {
  return (
    <Shop shopDescription='new arrival' items={womenArrival} />
  )
}

export default NewArrival;
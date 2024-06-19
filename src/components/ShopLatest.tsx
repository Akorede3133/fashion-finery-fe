import { womenLatest } from '../utils/shopLatest';
import Shop from './Shop';
const ShopLatest = () => {
  return (
    <Shop shopDescription='shop the latest' items={womenLatest} />
  )
}

export default ShopLatest
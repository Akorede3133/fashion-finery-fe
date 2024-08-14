import { HiOutlineArrowRight, HiOutlineHeart, HiOutlineXMark } from 'react-icons/hi2';
import img1 from '../assets/women/women_arrivals_1.png';
import img2 from '../assets/women/women_arrivals_2.png';
import img3 from '../assets/women/women_arrivals_3.png';
import img4 from '../assets/women/women_arrivals_4.png';
import img5 from '../assets/women/women_product_1.png';
import img6 from '../assets/women/women_product_2.png';
import img7 from '../assets/women/women_product_3.png';
import img8 from '../assets/women/women_coat_1.png';
import img9 from '../assets/women/women_coat_2.png';
import img10 from '../assets/women/women_shop_1.png';
import img11 from '../assets/women/women_shop_2.png';
import img12 from '../assets/women/women_shop_3.png';
import { Link } from 'react-router-dom';






const products = [
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img1
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img2
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img3
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img4
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img5
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img6
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img7
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img8
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img9
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img10
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img11
  },
  {
    name: 'Cut-Out Mini Dress',
    price: 366.00,
    image: img12
  },
]

const ProductList = () => {
  return (
    <div className=" bg-white h-full">
      <ul className=' grid grid-cols-2 md:grid-cols-3 gap-4 product--list--container'>
        {
          products.map((product) => (
            <li>
              <Link to='/shopping/2'>
                <div className=' relative'>
                  <img src={product.image} alt={product.name} />
                  <button  className=' absolute top-0 right-0 m-4'>
                    <HiOutlineHeart className=' text-xl' />
                  </button>
                </div>
                <div className=' flex flex-col items-center gap-1'>
                  <p className=' text-neutral-gray-12 text-sm'>{product.name}</p>
                  <p className=' text-neutral-gray-12 text-sm'>{`$${product.price}`}</p>
                  <div className=' flex items-center gap-2'>
                    <button className=' bg-white border border-neutral-600 h-[20px] w-[20px] rounded-full p-[1px] '>
                      <div className=' bg-neutral-600 h-full w-full rounded-full'></div>
                    </button>
                    <button className=' bg-white border-0 border-primary-black h-[18px] w-[18px] rounded-full '>
                      <div className=' bg-primary-black h-full w-full rounded-full'></div>
                    </button>
                    <button className=' bg-white border-0 border-primary-black h-[18px] w-[18px] rounded-full '>
                      <div className=' bg-neutral-black-5 h-full w-full rounded-full'></div>
                    </button>
                  </div>
                </div>
              </Link>
             
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList

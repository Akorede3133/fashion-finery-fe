import wishItem1 from '../assets/women/women_arrivals_1.png';
import wishItem2 from '../assets/women/women_arrivals_2.png';
import wishItem3 from '../assets/women/women_arrivals_3.png';
import wishItem4 from '../assets/women/women_arrivals_4.png';
const items = [
  {
    name: 'Cut-Out Midi Dress',
    price: 36,
    image: wishItem1 
  },
  {
    name: 'Cut-Out Midi Dress',
    price: 36,
    image: wishItem2 
  },
  {
    name: 'Cut-Out Midi Dress',
    price: 36,
    image: wishItem3 
  },
  {
    name: 'Cut-Out Midi Dress',
    price: 36,
    image: wishItem4 
  },
  {
    name: 'Cut-Out Midi Dress',
    price: 36,
    image: wishItem1 
  },
]
import { FiTrash } from "react-icons/fi";
const NonEmptyWishlist = () => {

  return (
    <div>
      <ul className=" wish--grid--container">
        {
          items.map((item) => (
            <li className="">
              <div className="relative">
                <img src={item.image} alt="" className="w-[255px] lg:w-[460px] object-cover" />
                <button className=" absolute top-0 right-0 bg-white m-4 p-[2px] rounded-sm">
                  <FiTrash />
                </button>
              </div>
              <div className=" text-center">
                <p className=" text-neutral-gray-12">Cut-Out mini dress</p>
                <p className=" text-neutral-gray-5">$36.00</p>
              </div>
            </li>
          ))
        }
      
      </ul>
     </div>
  )
}

export default NonEmptyWishlist
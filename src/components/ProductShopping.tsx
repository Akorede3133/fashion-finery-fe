import { HiOutlineXMark } from "react-icons/hi2"
import img1 from '../assets/women/women_arrivals_1.png';
import img2 from '../assets/women/women_arrivals_2.png';
import img3 from '../assets/women/women_arrivals_3.png';
import img4 from '../assets/women/women_arrivals_4.png';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";


const ShoppingImg = [img1, img2, img3, img4];
const ProductShopping = () => {
  const length = ShoppingImg.length - 1;
  const [count, setCount] = useState(0);
  console.log(count, -length);
  const slideToRight = () => {
    if (count > - length) {
      setCount((prev) => prev - 1);
    }
  }
  const slideToLeft = () => {
    if (count < 0) {
      setCount((prev) => prev + 1);
    }
  }
  useEffect(() => {
    const runCarosel = () => {
      if (count === -length) {
        setCount(0);
        console.log('equal!!!');
        
      }
      if (count > -length) {
        setCount((prev) => prev - 1);
      }
    }
    const interval = setInterval(runCarosel, 1500)
    return () => {
      clearInterval(interval);
    }
  }, [length, count])
  return (
    <div className=" min-h-screen w-[90%] mx-auto pb-32">
      <div className=" flex justify-between pb-5 py-4">
        <div className=" flex items-center gap-2">
          <p className=" capitalize text-sm border-r border-neutral-gray-5 pr-2"><span className=" text-srate-error-1">281</span> products found</p>
          <div className=" flex items-center text-sm">
            <HiOutlineXMark  />
            <p className=" capitalize">in stock</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" relative">
          <button className={`border border-primary-black p-2 rounded-md absolute top-[50%] z-30 mx-4 focus:bg-srate-info-1 focus:border-none shopping--image--slide--btn ${count === 0 && 'opacity-40'}`} onClick={slideToLeft} disabled={count === 0}>
            <BsChevronLeft />
          </button>
          <ul className=" relative overflow-hidden grid grid-cols-1 h-[600px] w-full">
            {
              ShoppingImg.map((img, index) => {
                const translate = `translateX(${(index + count) * 100}%)`;
                return (
                  <li className=" w-full h-full object-cover absolute" key={index} style={{
                    transform: translate,
                    transition: 'all',
                    transitionDuration: '0.75s'

                  }}>
                    <img src={img} alt=""  className=" aspect-video w-full object-cover h-full" />
                  </li>
                )
              })
            }
          </ul>
          <button className={`border border-primary-black p-2 rounded-md absolute right-0 top-[50%] z-30 mx-4 focus:bg-srate-info-1 focus:border-none shopping--image--slide--btn ${count === -length && 'opacity-40'} `} onClick={slideToRight} disabled={count === -length}>
            <BsChevronRight />
          </button>
        </div>
        <ul className="grid grid-cols-4 py-3 gap-4">
          {
            ShoppingImg.map((img, index) => {    
              return (
                <li key={index} >
                  <img src={img} className={`${-index === count ? 'opacity-100 border-l-4 border-tint-1' : 'opacity-20'}`} alt='product image' />
                </li>
              )
            })
          }
        </ul>
        <section>
          <h3 className=" capitalize text-2xl font-medium">Cut-Out Midi Dress</h3>
          <div>
            <p>$363.00</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductShopping
import { useEffect, useState } from "react";
import { BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiOutlineHeart, HiOutlineMinus, HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2"
import img1 from '../assets/women/women_arrivals_1.png';
import img2 from '../assets/women/women_arrivals_2.png';
import img3 from '../assets/women/women_arrivals_3.png';
import img4 from '../assets/women/women_arrivals_4.png';
import star from '../assets/star.png';
import shopPay from '../assets/shop_pay.png';
import pay from '../assets/pay.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import maestro from '../assets/maestro.png';
import discover from '../assets/discover.png';


const ShoppingImg = [img1, img2, img3, img4];
const alsoLike = [[img1, img2], [img3, img4]];
const cards = [pay, visa, mastercard, maestro, discover];
const reviews = [
  {
    reviewer: 'Whitney King',
    date: new Date(),
    comment: 'My friend was wearing this GORGEOUS skirt, I asked her where did she get it fromshe said Nocturne! Id never heard of them but bought one myself WOW love it so much the quality is amazing comfortable too - highly recommend!'
  },
  {
    reviewer: 'Whitney King',
    date: new Date(),
    comment: 'My friend was wearing this GORGEOUS skirt, I asked her where did she get it fromshe said Nocturne! Id never heard of them but bought one myself WOW love it so much the quality is amazing comfortable too - highly recommend!'
  },
]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ProductShopping = () => {
  const [count, setCount] = useState(0);
  const [SuggestionCount, setSuggestionCount] = useState(0);

  const [displayProductDescOrInfo, setDisplayProductDescOrInfo] = useState<'desc' | 'info'>('desc');
  
  const length = ShoppingImg.length - 1;
  const suggestionLength = alsoLike.length - 1;
  const slideToRight = () => {
    if (count > -length) {
      setCount((prev) => prev - 1);
    }
  }
  const slideSuggestionToRight = () => {
    if (SuggestionCount > -suggestionLength ) {
      setSuggestionCount((prev) => prev - 1);
    }
  }
  const slideToLeft = () => {
    if (count < 0) {
      setCount((prev) => prev + 1);
    }
  }
  const slideSuggestionToLeft = () => {
    if (SuggestionCount < 0) {
      setSuggestionCount((prev) => prev + 1);
    }
  }
  useEffect(() => {
    const runCarosel = () => {
      if (count === -length) {
        setCount(0);
        
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
          <div className=" flex justify-between py-4">
            <p className=" font-medium text-xl">$363.00</p>
            <ul className=" flex items-center gap-1">
              {
                [1, 2, 3, 4, 5].map(() => (
                  <li>
                    <img src={star} alt="Star" className="w-[16px] h-[16px]" />
                  </li>
                ))
              }
            </ul>
            <p className=" text-neutral-gray-11 capitalize">23 reviews</p>
          </div>
          <p className=" text-neutral-gray-11 font-normal">Shipping calculated at checkout.</p>
          <article className=" pt-8 pb-5">
            <h4 className=" font-bold uppercase">size: XS</h4>
            <div className=" flex items-center gap-2 pt-4">
              <button className=" text-white bg-tint-1 w-[30px] h-[30px] rounded-md uppercase text-sm">XS</button>
              <button className=" text-neutral-gray-11 bg-neutral-gray-1 w-[30px] h-[30px] rounded-md uppercase text-sm">s</button>
              <button className=" text-neutral-gray-11 bg-neutral-gray-1 w-[30px] h-[30px] rounded-md uppercase text-sm">m</button>
              <button className=" text-neutral-gray-11 bg-neutral-gray-1 w-[30px] h-[30px] rounded-md uppercase text-sm">l</button>
            </div>
          </article>
          <article>
            <h4 className=" font-bold uppercase">colour: black</h4>
            <div className=" w-[30px] h-[30px] bg-primary-black border-[3px] border-neutral-gray-5 rounded-md my-4" />
          </article>
          <div className=" space-y-3">
            <div className=" flex gap-4">
              <div className=" flex items-center gap-6 border border-neutral-black-4 rounded-md px-[25px] py-2">
                <button>
                  <HiOutlineMinus className=" text-xl text-primary-black" />
                </button>
                <p className=" text-sm">1</p>
                <button>
                  <HiOutlinePlus  className=" text-xl" />
                </button>
              </div>
              <button className=" border rounded-md border-neutral-black-4 px-[22px]">
                <HiOutlineHeart className=" text-2xl " />
              </button>
            </div>
            <button className=" uppercase bg-srate-info-2 w-full py-3 rounded-md text-white">add to cart</button>
            <button className=" uppercase bg-neutral-black-5 w-full py-3 rounded-md text-white flex justify-center items-center gap-2">
              <p>view more</p>
              <img src={shopPay} alt="" className=" self-start" />
            </button>
          </div>
          <div className=" space-y-2 text-sm text-neutral-gray-11 font-normal pt-[39px] pb-6  text-justify">
            <p>A classic for any closet, this knit sweater by Manelo is complimented with a beautiful stripe ruffle detail..</p>
            <p>Turtleneck sweater with striped ruffle detail on sleeves.</p>
            <p>80% Acrylic, 20% Polyester</p>
            <p>Hand Wash Cold; Do Not Bleach; Do Not Tumble Dry; Iron Low; Dry Clean</p>
            <p>Model Product Size: S Model Size: </p>
            <p>Height 5'10 / Bust 29.5 in / Waist 23 in / Hips 34 in</p>
          </div>
          <div>
            <ul className=" flex gap-3 justify-center">
              {
                cards.map((card) => (
                  <li>
                    <img src={card} alt="Payment card" />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        <section className="pt-[45px] pb-6">
          <div className="flex bg-tint-5 justify-between items-center pl-5">
            <h4 className=" font-bold">Reviews</h4>
            <button className=" bg-primary-black w-[48px] h-[48px] rounded-md flex justify-center items-center">
              <HiOutlinePlus className=" text-white text-xl" />
            </button>
          </div>
          <div>
            <div className=" px-4 border-2 border-tint-5 py-4">
              <h4>Customer reviews</h4>
              <div className=" flex justify-between">
                <ul className="flex gap-1">
                  {
                    [1, 2, 3, 4, 5].map(() => (
                      <li>
                        <img src={star} alt="Star" className="w-[16px] h-[16px]" />
                      </li>
                    ))
                  }
                </ul>
                <p className=" pr-5">Based on 14 reveiws</p>
              </div>
              <div className=" flex justify-end">
                <button className="pt-2 text-sm">Write a review</button>
              </div>
            </div>
            <div>
              <ul className="">
                {
                  reviews.map((review) => {
                    return (
                      <li className=" border-2 border-t-0 border-tint-5 px-4 py-3 flex gap-3 flex-col">
                        <ul className="flex gap-1">
                          {
                            [1, 2, 3, 4, 5].map(() => (
                              <li>
                                <img src={star} alt="Star" className="w-[16px] h-[16px]" />
                              </li>
                            ))
                          }
                        </ul>
                        <p className=" text-neutral-black-3">{review.reviewer} on {` ${months[review.date.getMonth()]} ${review.date.getDate()}, ${review.date.getFullYear()}`}</p>
                        <p className=" text-sm  text-neutral-gray-12 font-normal">{review.comment}</p>
                        <button className=" text-sm  text-neutral-gray-12 self-end">Report as inappropriate</button>
                      </li>
                    )
                  })
                }
              </ul>
              <div className=" border-2 border-tint-5 border-t-0  flex justify-end gap-20 pt-2 pb-[52px] pr-5">
                <div className=" space-x-4">
                  {
                    [1, 2, 3].map((num) => (
                      <button className=" text-neutral-gray-12">{num}</button>
                    ))
                  }
                </div>
                <button className=" capitalize text-neutral-gray-12 flex items-center gap-1">
                  <span>next</span>
                  <BsChevronDoubleRight />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className=" flex justify-between">
            <button className={ ` capitalize font-bold text-neutral-gray-11  ${displayProductDescOrInfo === 'desc' && 'border-b-2 border-srate-info-1 text-srate-info-1'}  py-1 pr-5`} onClick={() => setDisplayProductDescOrInfo('desc')}>description</button>
            <button className={ ` capitalize font-bold text-neutral-gray-11 ${displayProductDescOrInfo === 'info' && 'border-b-2 border-srate-info-1 text-srate-info-1'}`} onClick={() => setDisplayProductDescOrInfo('info')}>additional info</button>
          </div>
          {displayProductDescOrInfo === 'desc' && <div className=" pt-6">
            <p>At Vero Eos Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditilis Praesentium Voluptatum Deleniti Atque Corrupti Quos Dolores Et Quse Molestias E xcepturi Sint Non Providen.</p>
            <div>
              <h5 className=" text-xl font-bold pt-6 pb-3">Information</h5>
              <ul className="mx-4">
                <li className=" list-disc capitalize font-medium">Fabric: Denim</li>
                <li className=" list-disc capitalize font-medium">Fit Type: Loose fit</li>
                <li className=" list-disc capitalize font-medium">Feature: Adjustable straps</li>
                <li className=" list-disc capitalize font-medium">Front and back pockets</li>
              </ul>
            </div>
            
          </div>}
          {displayProductDescOrInfo === 'info' &&<div>
            Addiditional info
          </div>}
        </div>
        <section className=" mt-[124px] bg-neutral-gray-1 px-5">
          <h4>You may also like</h4>
          <ul className=" relative  overflow-hidden h-[320px]">
            {
              alsoLike.map((images, index) => {      
                const translate = `translateX(${(index + SuggestionCount) * 100}%)`;           
                return (
                  <li key={index} className="grid grid-cols-2 gap-4 py-3 absolute" style={{
                    transform: translate,
                    transition: 'all',
                    transitionDuration: '0.75s'
                  }} >
                   {
                    images.map((img) => (
                      <div className="" >
                        <div className=" relative">
                          <img src={img} className={` rounded-md `} alt='product image' />
                          <button className=" absolute top-0 right-0 p-3">
                            <HiOutlineHeart className=" text-xl" />
                          </button>
                        </div>
                        <div className=" flex justify-center flex-col items-center gap-1 pt-1">
                          <p className=" font-bold capitalize">cut-out mini dress</p>
                          <p className=" space-x-4 text-sm">
                            <span className=" text-srate-error-1 line-through">$365.00</span>
                            <span>$264.00</span>
                          </p>
                        </div>
                      </div>
                    ))
                   }
                    
                  </li>
                )
              })
            }
          </ul>
          <div className=" flex justify-between pt-4">
            <button className=" border border-neutral-black-4 p-2 shopping--also--like--image--slide--btn focus:border-srate-info-1 " onClick={slideSuggestionToLeft}>
              <BsChevronLeft />
            </button>
            <button className=" border border-neutral-black-4 p-2 shopping--also--like--image--slide--btn focus:border-srate-info-1 " onClick={slideSuggestionToRight}>
              <BsChevronRight />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductShopping
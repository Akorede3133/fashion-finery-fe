import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import logo from '../assets/white_logo.png';
import FooterLinks from './FooterLinks';
import { FaFacebookSquare } from 'react-icons/fa';
import { LiaFacebookSquare } from 'react-icons/lia';
import { BsTwitter } from 'react-icons/bs';
import { PiInstagramLogoLight, PiTwitterLogoLight } from 'react-icons/pi';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
const shopLinks = [
  {
    name: 'products',
    link: '#'
  },
  {
    name: 'overview',
    link: '#'
  },
  {
    name: 'pricing',
    link: '#'
  },
  {
    name: 'releases',
    link: '#'
  },
]
const companyLinks = [
  {
    name: 'about us',
    link: '#'
  },
  {
    name: 'contact',
    link: '#'
  },
  {
    name: 'news',
    link: '#'
  },
  {
    name: 'support',
    link: '#'
  },
]
const Footer = () => {
  return (
    <div>
      <div className='bg-shade-4 relative'>
        <button className=' bg-white absolute right-5 lg:right-[110px] p-2 flex items-center justify-center  rounded-br-md rounded-bl-md'>
          <HiChevronUp  className='text-2xl text-shade-4'/>
        </button>
        <div className=" w-[90%] mx-auto py-12">
          <div className='flex items-center gap-3'>
            <img src={logo} alt="" className='w-[50px]' />
            <p className=' text-3xl font-bree-serif text-white'>Manelo</p>
          </div>
          <section className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-between justify-center lg:w-[90%] lg:mx-auto pt-8 lg:pt-10 lg:grid grid-cols-[1fr_2fr_3fr]'>
            <div className='flex gap-6 lg:order-2 lg:gap-40'>
              <FooterLinks header='shop' links={shopLinks} />
              <FooterLinks header='company' links={companyLinks} />
            </div>
            <div className=' lg:order-1'>
              <h4 className=' uppercase text-white text-center pb-3 lg:text-left'>social media</h4>
              <ul className='flex items-center gap-2'>
                <li>
                  <a href="#">
                    <LiaFacebookSquare className='text-white text-4xl' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PiTwitterLogoLight className='text-white text-4xl' />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PiInstagramLogoLight className='text-white text-4xl' />
                  </a>
                </li>
              </ul>
            </div>
            <div className=' self-start lg:self-auto w-full  py-6 lg:p-0 lg:order-3 lg:flex flex-col gap-4'>
              <h4 className=' text-xl text-left uppercase text-white pb-3 lg:p-0'>stay up to date</h4>
              <div className="gap-4 grid grid-cols-[3fr_1fr]">
                <input type="email" placeholder="Email Address" className=" border border-neutral-gray-1 px-4 py-2 rounded-md text-primary-black placeholder:text-shade-4 placeholder:font-semibold outline-none" />
                <button className=" border bg-white border-primary-black text-primary-black py-2 px-4 rounded-md font-semibold capitalize">submit</button>
              </div>
            </div>
          </section>
          <div className='pt-9 lg:flex gap-5 items-center'>
            <div className='h-[1px] w-full mb-3 bg-white lg:mb-0' />
            <ul className='flex justify-center gap-5'>
              <li>
                <a href="#" className='text-white font-plus-jakarta text-sm'>Terms</a>
              </li>
              <li>
                <a href="#" className='text-white font-plus-jakart text-sm'>Privacy</a>
              </li>
              <li>
                <a href="#" className='text-white font-plus-jakart text-sm'>Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
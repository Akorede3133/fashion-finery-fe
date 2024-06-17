import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import logo from '../assets/white_logo.png';
import FooterLinks from './FooterLinks';
import { FaFacebookSquare } from 'react-icons/fa';
import { LiaFacebookSquare } from 'react-icons/lia';
import { BsTwitter } from 'react-icons/bs';
import { PiInstagramLogoLight, PiTwitterLogoLight } from 'react-icons/pi';
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
      <div className=" bg-white pt-10">
        <h3 className=" capitalize text-xl text-neutral-gray-11 text-center pb-4 pt- ">get exclusive offers</h3>
      </div>
      <div className="flex sm:justify-center gap-4 items-center pb-16 w-[90%] mx-auto">
        <input type="email" placeholder="Email Address" className=" border border-neutral-gray-1 px-4 py-2 rounded-md text-primary-black placeholder:text-primary-black placeholder:font-semibold outline-none w-[70%] sm:w-[40%]" />
        <button className=" border border-shade-4 py-2 px-4 rounded-md text-shade-4 font-semibold capitalize w-[30%] sm:w-auto">sign up</button>
      </div>
      <div className=" bg-shade-4 py-12">
        <div className='flex items-center gap-3'>
          <img src={logo} alt="" className='w-[50px]' />
          <p className=' text-3xl font-bree-serif text-white'>Manelo</p>
        </div>
        <section className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between justify-center bg-red-500 sm:w-[90%] sm:mx-auto'>
        <div className='flex gap-6 sm:order-2'>
          <FooterLinks header='shop' links={shopLinks} />
          <FooterLinks header='company' links={companyLinks} />
        </div>
        <div className=' sm:order-1'>
          <h4 className=' uppercase text-white text-center pb-3'>social media</h4>
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
        <div className=' self-start w-[90%] sm:w-full mx-auto py-6 sm:p-0 sm:order-3'>
          <h4 className=' text-xl text-left uppercase text-white pb-3 sm:p-0'>stay up to date</h4>
          <div className="flex sm:justify-cente gap-4 items-cente mx-aut">
            <input type="email" placeholder="Email Address" className=" border border-neutral-gray-1 px-4 py-2 rounded-md text-primary-black placeholder:text-shade-4 placeholder:font-semibold outline-none w-[70%] sm:w-[40%]" />
            <button className=" border border-primary-black text-primary-black py-2 px-4 rounded-md font-semibold capitalize w-[30%] sm:w-auto">sign up</button>
          </div>
        </div>
        </section>
        <div className='w-[90%] mx-auto pt-9'>
          <div className='h-[2px] w-full mb-3 bg-white' />
          <ul className='flex justify-center gap-5'>
            <li>
              <a href="#" className='text-white font-plus-jakarta'>Terms</a>
            </li>
            <li>
              <a href="#" className='text-white font-plus-jakart'>Privacy</a>
            </li>
            <li>
              <a href="#" className='text-white font-plus-jakart'>Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
const Hero = () => {
  return (
    <div>
      <div className="lg:hidden h-[65vh] bg-[url('assets/women/women-hero.png')] bg-no-repeat bg-cover bg-center w-full relativ flex flex-col justify-end gap-4 items-center ">
        <div className='backdrop-filter bg-[rgba(255,255,255,0.5)] px-10 rounded-md'>
          <h1 className='text-3xl text-center text-neutral-black-5 capitalize px-3 py-2'>
            new collection
          </h1>
        </div>
        <div className='bg-white self-center flex justify-between gap-4 p-3 rounded-md'>
          <button className='px-[2rem] py-3 border rounded-lg w-full'>women</button>
          <button className='px-[2rem] py-3 border rounded-lg w-full'>men</button>
        </div>
      </div>
      <div className="hidden lg:block h-[90vh] bg-[url('assets/women/women-hero-desktop.png')] bg-no-repeat bg-cover bg-center relative w-full">
        <div className='absolute top-[20%] left-[50px] lg:left-[94px]'>
          <h1 className='text-[3.5rem] capitalize'>
            new <br />collection
          </h1>
          <p className='py-2 capitalize'>Business Management Consulting Boutique <br /> for Lifestyle Brands</p>
          <div className='flex items-center gap-3'>
            <a href="#" className=' border-shade-4 border px-4 py-2 text-shade-4 uppercase rounded-md text-sm font-[600]'>learn more</a>
            <a href="#" className=' border-shade-4 border px-4 py-2 rounded-md uppercase bg-shade-5 text-white text-sm font-[600]'>shop more</a>
          </div>
        </div>
        <div className='bg-white self-center flex justify-between gap-4 p-3 rounded-md absolute bottom-0 right-[9%]'>
          <button className='px-[3rem] py-3 border rounded-lg w-full focus:border-shade-5 focus:bg-neutral-gray-4 uppercase focus:text-shade-5 text-sm font-bold font-plus-jakarta'>women</button>
          <button className='px-[3rem] py-3 border rounded-lg w-full focus:border-shade-5 focus:bg-neutral-gray-4 uppercase focus:text-shade-5 text-sm font-bold font-plus-jakarta'>men</button>
        </div>
      </div>
    </div>
    
  )
}


export default Hero



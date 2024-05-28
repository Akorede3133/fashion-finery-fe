import img from '../assets/women/women-hero.png';
const Hero = () => {
  return (
    <div>
      <div className="sm:hidden h-[60vh] bg-[url('assets/women/women-hero.png')] bg-no-repeat bg-cover bg-center relative">
        <div className='backdrop-filter bg-[rgba(255,255,255,0.5)] px-10 rounded-md absolute bottom-[100px] left-[50%] translate-x-[-50%] w-[90%] mx-auto'>
          <h1 className='text-3xl text-center text-neutral-black-5 capitalize px-3 py-2'>
            new collection
          </h1>
        </div>
        <div className='bg-white self-center flex justify-between gap-4 p-3 rounded-md absolute bottom-0 left-[50%] translate-x-[-50%] w-[70%] mx-auto'>
          <button className='px-[2rem] py-3 border rounded-lg w-full'>women</button>
          <button className='px-[2rem] py-3 border rounded-lg w-full'>men</button>
        </div>
      </div>
      <div >

      </div>
    </div>
    
  )
}


export default Hero

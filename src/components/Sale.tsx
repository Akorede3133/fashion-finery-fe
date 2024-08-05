import  womenSale from '../assets/women/women_sale.png';
const Sale = () => {
  return (
    <div className=' mt-10 relative h-[50vh] lg:h-[90vh]'>
      <img src={womenSale} alt="Women sale" className=' object-cover h-full w-full' />
      <div className=' absolute top-[60%] lg:to-[70%] left-[50%] translate-x-[-50%]'>
        <p className=' text-[0.75rem] lg:text-[1.25rem] text-primary-light-blue uppercase font-plus-jakarta text-center'>#manelosale</p>
        <h3 className=' text-5xl uppercase text-primary-dark-blue font-plus-jakarta text-center lg:text-[6.25rem]'>sale</h3>
        <p  className=' text-[0.90rem] lg:text-[2.5rem] text-white uppercase font-plus-jakarta text-center'>manelo</p>
      </div>
    </div>
  )
}

export default Sale

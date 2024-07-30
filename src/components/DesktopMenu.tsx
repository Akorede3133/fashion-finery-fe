import womenMenuPicture from '../assets/women/women_menu_picture.png';


const links = [
  'coats & jacket',
  'Trench coat',
  'dresses',
  'collections',
  'new arrivals',
  'all'
]
const DesktopMenu = ({ position } : { position: number }) => {  
  const left = `${position}px`;
  return (
    <div className="hidden sm:block fixed top-[73px] z-[9999] bg-[rgba(0,0,0,0.5)] left-0 w-full h-full">
      <div className={`absolute top-0 z-[1000] bg-white rounded-sm`} style={{
        left: left
      }}>
        <div className="flex gap-10 px-5 py-5">
          <ul className=" divide-y">
            {
              links.map((item) => (
                <li className=" uppercase text-[12px] font-plus-jakarta font-normal p-4">
                  {item}
                </li>
              ))
            }
          </ul>
          <ul className=" divide-y">
            {
              links.map((item) => (
                <li className=" uppercase text-[12px] font-plus-jakarta font-normal p-4">
                  {item}
                </li>
              ))
            }
          </ul>
          <div className='pt-5'>
            <img src={womenMenuPicture} alt=""  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
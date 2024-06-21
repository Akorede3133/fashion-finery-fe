import womenMenuPicture from '../assets/women/women_menu_picture.png';
import menMenuPicture from '../assets/men/men_menu_picture.png';


const links = [
  'coats & jacket',
  'Trench coat',
  'dresses',
  'collections',
  'new arrivals',
  'all'
]
const DesktopMenu = () => {
  return (
    <div className="absolute top-[85px] z-[9999] bg-[rgba(0,0,0,0.5)] left-0 w-full h-full">
      <div className="absolute top-0 z-[1000] bg-white left-[5%] rounded-sm">
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
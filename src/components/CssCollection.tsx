import { HiOutlineChevronRight } from "react-icons/hi2"
import CollectionsHeader from "./CollectionsHeader"
import womenCss from '../assets/women/women_css_collection.png';
const CssCollection = () => {
  return (
    <article>
      <div className=" sm:hidden">
        <CollectionsHeader text="css collection" />
          <img src={womenCss} alt="Women Css Collection" className="w-full object-cover" />
          <div className="flex flex-col gap-3">
            <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2">Fruitcake sweet roll gummies biscuit dessert cotton candy. Brownie gummies muffin. Sweet sesame snaps cotton candy.</p>
            <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md self-end">
              <span>view more</span>
              <HiOutlineChevronRight className=" text-shade-5" />
            </button>
          </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-10">
        <div>
          <CollectionsHeader text="css collection" />
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2 py-4">Fruitcake sweet roll gummies biscuit dessert cotton <br /> candy. Brownie gummies muffin. Sweet sesame snaps <br /> cotton candy.</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
            </button>
        </div>
        <div>
          <img src={womenCss} alt="Women css collection" />
        </div>
      </div>
    </article>
  )
}

export default CssCollection
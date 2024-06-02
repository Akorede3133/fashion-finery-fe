import { HiOutlineChevronRight } from "react-icons/hi2"
import CollectionsHeader from "./CollectionsHeader"

const CollectionsDescriptionDesktop = ({ header, description }) => {
  // Discover perfectly tailored wool coats for every <br /> look to our bestselling leather trench coat - the <br /> ultimate piece for updating your evening cover up.
  return (
    <div className="">
      <CollectionsHeader text={header} />
      <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2 py-4">{description}</p>
      <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
        <span>view more</span>
        <HiOutlineChevronRight className=" text-shade-5" />
      </button>
  </div>
  )
}

export default CollectionsDescriptionDesktop
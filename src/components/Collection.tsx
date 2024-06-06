import { HiOutlineChevronRight } from "react-icons/hi2"
import CollectionsHeader from "./CollectionsHeader"
const Collection = ({ header, description, img }: { header: string, description: string, img: string }) => {
  return (
    <article className="collection">
      <div className="sm:hidden">
       <CollectionsHeader text={header} />
       <img src={img} alt="Women cupc collection" className="w-full" />

        <div className="flex flex-col gap-3">
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal pt-2">{description}</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md self-end">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-10">
       <img src={img} alt="Women cupc collection" className="w-full" />
        <div className="">
          <CollectionsHeader text={header} />
          <p className=" font-plus-jakarta text-sm text-primary-black font-normal w-[55%] pt-2 py-4">{description}</p>
          <button className=" flex items-center gap-2 bg-tint-5 text-primary-dark-blue capitalize font-semibold px-8 py-2 rounded-md">
            <span>view more</span>
            <HiOutlineChevronRight className=" text-shade-5" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Collection;
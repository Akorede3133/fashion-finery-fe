import { useState } from "react"
import MenuHead from "./MenuHead"

const Search = () => {
  const [showSearch, setShowSearch]  = useState(false);
  const closeSearch = () => setShowSearch(false);
  return (
    <div className={`fixed sm:hidden bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-auto ${showSearch ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s]`}>
      <MenuHead text='search' closeMenu={closeSearch} />
    </div>
  )
}

export default Search
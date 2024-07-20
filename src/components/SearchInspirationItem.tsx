const SearchInspirationItem = ({ img }) => {
  return (
    <li className="border flex gap-4 p-2">
    <img src={img} alt="women search" />
    <div className=" self-end">
      <p className=" capitalize">Cut-out mini dress</p>
      <div className=" space-x-4">
        <span className=" line-through text-sm">$563.00</span>
        <span className="text-sm text-srate-error-1 font-semibold">$363.00</span>
      </div>
    </div>
  </li>
  )
}

export default SearchInspirationItem
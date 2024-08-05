const OrderRow = () => {
  return (
    <ul className="flex flex-col lg:grid lg:grid-cols-[0.2fr_1fr_1fr_0.2fr_0.4fr_1fr_1fr] lg:items-center  lg:gap-2 w-[50%] lg:w-full border-r lg:border-r-0 lg:text-center lg:border-b lg:py-2">
      <li className=" hidden sm:block text-center p-2">
        <span className=" capitalize">01</span>
      </li>
      <li className="text-center border-b lg:border-0  p-2">
      <span className=" capitalize">563YjQmB3089</span>
      </li>
      <li className="text-center border-b lg:border-0  p-2">
        <span className=" capitalize text-nowrap">Cut out mini dress</span>
      </li>
      <li className="text-center border-b lg:border-0  p-2">
        <span className=" capitalize">1</span>
      </li>
      <li className="text-center border-b lg:border-0  p-2">
        <span className=" capitalize">$277.76</span>
      </li>
      <li className=" hidden lg:block capitalize bg-neutral-black-4 text-center py-2 rounded-md text-neutral-gray-4">
        <span>pending</span>
      </li>
      <li className="  hidden lg:block capitalize bg-srate-success-1 text-center py-2 rounded-md text-neutral-gray-4">active</li>
    </ul>
  )
}

export default OrderRow
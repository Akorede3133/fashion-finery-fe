import { LuArrowDownUp } from "react-icons/lu"

const cols = [
  'product name',
  'qty',
  'price',

]
const OrderColumn = () => {
  return (
    <ul className="flex flex-col lg:grid lg:grid-cols-[0.1fr_1fr_1fr_0.2fr_0.4fr_1fr_1fr] lg:gap-2 w-[50%] lg:w-full border-r lg:border-r-0 lg:border-b lg:text-center capitalize">
      <li className="hidden lg:flex items-center gap-2 flex-wra  font-bold border-b lg:border-0 p-2">
        <span>#</span>
      </li>
      <li className="flex items-center gap-2 flex-wra  font-bold border-b lg:border-0 p-2">
        <LuArrowDownUp />
        <span className=" text-nowrap">Order code</span>
        <LuArrowDownUp />
      </li>
      {
        cols.map((col) => {
          return (
            <li className=" items-center gap-2 font-bold  border-b lg:border-b-0 p-2 lg:flex capitalize">
            <span className=" text-nowrap">{col}</span>
          </li>
          )
        })
      }
      <li className=" items-center gap-2 font-bold p-2 hidden lg:flex">
        <span className=" text-nowrap">delivery status</span>
        <LuArrowDownUp />
      </li>
      <li className="items-center gap-4 font-bold p-2 hidden lg:flex">
        <span className=" text-nowrap">payout</span>
        <LuArrowDownUp />
      </li>
    </ul>
  )
}

export default OrderColumn
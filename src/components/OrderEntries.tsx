import { LuArrowDownUp } from "react-icons/lu"
import OrderRow from "./OrderRow";
import OrderColumn from "./OrderColumn";

const OrderEntries = () => {
  return (
    <section className="w-[90%] mx-auto pt-[42px]">
      <h3 className=" capitalize text-2xl font-bold border-b-[1px] border-neutral-gray-12  pb-2" >All orders</h3>
      <div className="py-4">
        <div className=" flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-4">
          <input type="text" placeholder="Search" className="border w-full lg:order-2 rounded-md p-2 outline-none" />
          <div className="flex items-center gap-3">
            <span className=" capitalize  text-neutral-gray-11 font-medium">show</span>
            <select name="" id="" className="border rounded-md px-2 py-1" >
              <option value="01">01</option>
            </select>
            <span className=" capitalize  text-neutral-gray-11 font-medium">entries</span>
          </div>
        </div>
        <div className="flex lg:flex-col">
          <OrderColumn />
          <OrderRow />
        </div>
        <div className=" lg:hidden">
          <div className="flex justify-between items-center gap-4 border- p-2">
            <div className="flex items-center gap-4 font-bold capitalize w-[50%]">
              <span className=" text-nowrap">delivery status</span>
              <LuArrowDownUp />
            </div>
            <p className=" capitalize bg-neutral-black-4 text-center w-[50%] py-2 rounded-md text-neutral-gray-4">pending</p>
          </div>
          <div className="flex justify-between items-center gap-4 border- p-2">
            <div className="flex items-center gap-4 font-bold capitalize w-[50%]">
              <span className=" text-nowrap">payout</span>
              <LuArrowDownUp />
            </div>
            <p className=" capitalize bg-srate-success-1 text-center w-[50%] py-2 rounded-md text-neutral-gray-4">active</p>
          </div>
        </div>
      </div>

      <div className=" text-8xl">
        map section
      </div>

    </section>
  )
}

export default OrderEntries
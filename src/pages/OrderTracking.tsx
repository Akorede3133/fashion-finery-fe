import OrderEntries from "../components/OrderEntries";

const OrderTracking = () => {
  const steps = ['placed', 'packed', 'shipped', 'delivered'];

  return (
    <div className=" pb-24 lg:border-l-[1px] lg:pl-20 lg:pb-0">
      <section className="w-[90%] mx-auto">
        <h3 className=" capitalize text-2xl font-bold border-b-[1px] border-neutral-gray-12">Track Your order</h3>
        <p className=" capitalize text-sm py-2 text-neutral-gray-12">Order Code: 563YjQmB3089</p>
      </section>
      <div className="lg:w-[90%] mx-auto">
        <ul className="stepper--wrapper overflow-hidden pt-[32px] pb-[53px]">
            {
              steps.map((label, index) => {
                const state = 1;
                return (
                  <li className={`stepper--item ${index + 1 <= state && 'completed'}`}>
                    <div className="step--counter text-sm">{index + 1}</div>
                    <div className="step--label capitalize text-sm">{label}</div>
                  </li>
                )
              })
            }
          
        </ul>
        
      </div>
      <section className=" w-[90%] mx-auto ">
        <h3 className=" text-2xl font-bold">Your order has been delivered</h3>
        <p className=" text-sm text-neutral-gray-5 font-bree-serif">DHL Smart Mail (Tracking Number 8294675384673240) </p>
      </section>
      <OrderEntries />
    </div>

  )
}

export default OrderTracking
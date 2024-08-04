const OrderTracking = () => {
  const steps = ['placed', 'packed', 'shipped', 'delivered'];
  return (
    <div className=" pb-24 sm:border-l-[1px] sm:pl-20 sm:pb-0">
      <section className="w-[90%] mx-auto">
        <h3 className=" capitalize text-2xl font-bold border-b-[1px] border-neutral-gray-12">Track Your order</h3>
        <p className=" capitalize text-sm py-2 text-neutral-gray-12">Order Code: 563YjQmB3089</p>
      </section>
      <div>
        <ul className="stepper--wrapper overflow-hidden">
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
    </div>

  )
}

export default OrderTracking
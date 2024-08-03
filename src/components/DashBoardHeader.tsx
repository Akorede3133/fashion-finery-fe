const DashBoardHeader = ({ headerText }) => {
  return (
    <div className="grid grid-cols-[1fr_0fr_1fr] py-5 sm:pb-[96px] sm:pt-[52px]">
      <p className="h-[1px] bg-neutral-gray-9"></p>
      <h2 className="uppercase mt-[-8px] mb-[-8px] text-2xl font-bold">{headerText}</h2>
      <p className="h-[1px] bg-neutral-gray-9 self-end"></p>
    </div>
  )
}

export default DashBoardHeader
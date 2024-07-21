const Input = ({ type, placeholder }: { type: string,  placeholder: string }) => { 
  return (
    <div className="flex justify-between border border-neutral-gray-6 rounded-md p-3">
      <input type={type} name={type} placeholder={placeholder} className=" outline-none w-full" />
    </div>
  )
}

export default Input
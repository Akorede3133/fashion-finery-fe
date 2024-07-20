const MenuShoppingOptionsWithIcons = ({ name, icon, action }) => {
  return (
    <li>
      <button className="flex gap-[4px] items-center mx-5 py-3 border-b-[1px] border-b-neutral-gray-1 w-full" onClick={action}>
        {icon}
        <span className=" font-plus-jakarta capitalize">{name}</span>
      </button>
   
    </li>
  )
}

export default MenuShoppingOptionsWithIcons
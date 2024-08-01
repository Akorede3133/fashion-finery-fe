const MenuShoppingOptionsWithIcons = ({ name, icon, action }) => {
  return (
    <li className=" mx-5 border-b-[1px] border-b-neutral-gray-1 ">
      <button className="flex gap-[4px] items-center py-3 w-full"  onClick={action}>
        {icon}
        <span className=" font-plus-jakarta capitalize">{name}</span>
      </button>   
    </li>
  )
}

export default MenuShoppingOptionsWithIcons
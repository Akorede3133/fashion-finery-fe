const MenuShoppingOptionsWithIcons = ({ name, icon }) => {
  return (
    <li className="flex gap-[4px] items-center mx-5 py-3 border-b-[1px] border-b-neutral-gray-1">
      {icon}
      <span className=" font-plus-jakarta capitalize">{name}</span>
    </li>
  )
}

export default MenuShoppingOptionsWithIcons
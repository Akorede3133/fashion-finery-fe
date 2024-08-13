const sortOptions = [
  'Featured',
  'Best selling',
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
  'Price, low to high',
  'Price, high to low',
  'Date, old to new',
  'Date, new to old',
]


const ProductSortOptions = () => {
  const selectedOption = 'Price, high to low'
  return (
    <ul className=" space-y-2">
          
    {
      sortOptions.map((option) => {
        return (
          <li key={option} className={` ${option === selectedOption && 'border-l-4 border-tint-1 bg-tint-5 '}text-left`}>
            <button className=" p-1 px-5 w-full text-left">{option}</button>
          </li>
        )
      })
    }
  </ul>
  )
}

export default ProductSortOptions
const FooterLinks = ({ header, links }) => {
  return (
    <div>
      <h4 className='text-xl uppercase text-white inline relative before:absolute before:h-[2px] before:w-full before:bottom-0 before:bg-white pb-[4px]'>{header}</h4>
      <ul className=' space-y-3 text-center py-10'>
        {
          links.map((link) => (
            <li>
              <a href={link.link} className='text-white capitalize font-plus-jakarta text-[0.75rem]'>{link.name}</a>
            </li>
          ))
        }
      </ul>      
    </div>
  )
}

export default FooterLinks
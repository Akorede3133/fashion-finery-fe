import PageHead from "./PageHead"

const Login = ({ closeMenu }) => {
  const showMenu = true
  return (
    <div className={`fixed sm:hidden bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-auto ${showMenu ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s]`}>
      <PageHead closeMenu={closeMenu} text='login' />
    </div>
  )
}

export default Login
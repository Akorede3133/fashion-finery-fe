import { hideAuthPage, selectAuth } from "../redux/feature/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import PageHead from "./PageHead"

const Login = () => {
  const { showAuthPage } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch();
  const closeLogin = () => {
    dispatch(hideAuthPage());
  }
  console.log(showAuthPage);
  

  return (
    <div className={`fixed sm:hidden bg-shade-4 top-0 min-h-screen h-full w-full left-0 z-[1000] overflow-y-auto ${showAuthPage ? 'translate-x-0' : 'translate-x-[-1000%]'} transition-all duration-[0.75s]`}>
      <PageHead closeMenu={closeLogin} text='login' />
    </div>
  )
}

export default Login
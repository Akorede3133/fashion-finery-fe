import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import DashBoardLayout from "./components/DashBoardLayout"
import Wishlist from "./pages/Wishlist"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<Home />} path="/"/>
      <Route  element={<DashBoardLayout />}>
        <Route path="dashboard" index element={<Dashboard />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Route>
  ))
  return (
   <RouterProvider router={router} />
  )
}

export default App
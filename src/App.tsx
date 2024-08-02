import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import DashBoardLayout from "./components/DashBoardLayout"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<Home />} path="/"/>
      <Route path="dashboard" element={<DashBoardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>
  ))
  return (
   <RouterProvider router={router} />
  )
}

export default App
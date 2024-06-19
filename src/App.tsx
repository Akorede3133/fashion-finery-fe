import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<Home />} path="/"/>
    </Route>
  ))
  return (
   <RouterProvider router={router} />
  )
}

export default App
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import HomePage from './pages/HomePage'
import NotFnd from "./pages/NotFound"
import AddJobPage from "./pages/AddJobPage"
import Job from "./pages/jobPage"
import JobsPage from "./pages/JobsPage"

const App = () => {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobPage/>}/>
        <Route path="/job/:id" element={<Job/>}/>
        <Route path="*" element={<NotFnd/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
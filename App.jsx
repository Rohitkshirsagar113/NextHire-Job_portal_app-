import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./layout/app-layout";  
import LandingPage from "./Pages/landing";
import Onboarding from "./Pages/Onboarding";
import Joblisting from "./Pages/job-listing";
import Job from "./Pages/Job";
import Postjob from "./Pages/Postjob";
import Savedjob from "./Pages/Savedjob";
import Myjobs from "./Pages/Myjobs";
import { ThemeProvider } from "./components/ui/theme-provider";


const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
      },
      {
        path:"/onboarding",
        element:<Onboarding/>,
      },
      {
        path:"/jobs",
        element:<Joblisting/>,
      },
      {
        path:"/job/:id",
        element:<Job/>,
      },
      {
        path:"/Postjob",
        element:<Postjob/>,
      },
      {
        path:"/Savedjob",
        element:<Savedjob/>,
      },
      {
        path:"/myjobs",
        element:<Myjobs/>,
      }
    ]
  }
])
function App() {
  return (
  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
   );
}

export default App;



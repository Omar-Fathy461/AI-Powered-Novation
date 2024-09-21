import { createBrowserRouter, RouterProvider } from "react-router-dom"

// components
import RootLayout from "./components/RootLayout"
import Home from './views/homePage/Home'
import Contact from "./views/contact/Contact"
import Blog from "./views/blog/Blog"
import Services from "./views/servicesPage/Services"
import AboutUs from "./views/About/AboutUs"

//style
import './assets/sass/app.scss'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      }
    ]
  }])
  return <RouterProvider router={router} />
}

export default App

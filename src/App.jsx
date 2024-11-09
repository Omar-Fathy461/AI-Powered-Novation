import { createBrowserRouter, RouterProvider } from "react-router-dom"

// components
import RootLayout from "./components/RootLayout"
import Home from './views/homePage/Home'
import Contact from "./views/contact/Contact"
import Blog from "./views/blog/Blog"
import Services from "./views/servicesPage/Services"
import AboutUs from "./views/About/AboutUs"
import BlogDetail from "./views/blog/BlogDetail"
import Login from "./views/Login/Login"
import Signup from "./components/signUp/Signup"

//style
import './assets/sass/app.scss'
import 'animate.css';

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
        path: "/blogs",
        element: <Blog />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  }])
  return <RouterProvider router={router} />
}

export default App

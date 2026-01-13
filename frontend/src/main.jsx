import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'

import HeroSection from './components/Hero'
import Login from './components/Login'
import Footer from './components/Footer'
import Products from './components/Product'
import News from './components/News'
import AddCrop from './components/Addproducts'
import Signup from './components/Signup'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
// import ChatBot from './components/Chatbot'

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        path:'',
        Component: HeroSection
      },
      {
        path:'/products',
        Component:Products
      },
      {
        path:'/news',
        Component:News
      },
      // {
      //   path:'/products',
      //   Component:AddCrop
      // },
      // {
      //   path:'/chatboat',
      //   Component:ChatBot
      // }
    ]
  },
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/register',
    Component:Signup
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

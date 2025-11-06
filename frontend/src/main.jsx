import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'

import HeroSection from './components/Hero'
import Login from './components/Login'
import Footer from './components/Footer'
import Products from './components/Product'
import News from './components/News'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'

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
      }
    ]
  },
  {
    path:'/login',
    Component:Login
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

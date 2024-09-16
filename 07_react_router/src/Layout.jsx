import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* Outlet lets your components to be same  */}
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout
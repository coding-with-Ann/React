import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>   
        <Footer/>
    </>
    //Outlet makes sure that header and footer appears same on all pages
  )
}

export default Layout
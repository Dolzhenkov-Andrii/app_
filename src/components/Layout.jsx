import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import GetCookie from './cookies/getCookie'

function Layout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

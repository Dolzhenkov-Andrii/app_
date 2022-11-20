import { useState, useEffect, useSearchParams } from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import GetCookie from './cookies/getCookie'

function Layout() {


    return (
        <>
            <Header />
            <div className='containerDark body'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout

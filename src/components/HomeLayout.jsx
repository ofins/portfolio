import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const HomeLayout = () => {
    return (
        <div className="homeLayout--container">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default HomeLayout
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Dashboard = ({ children }) => {
    return (
        <div className='bg-white dark:bg-stone-950'>
            <Navbar />
            <div className=''>{children}</div>
            <Footer />
        </div>
    )
}

export default Dashboard

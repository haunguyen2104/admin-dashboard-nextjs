import React from 'react'
import Navbar from '~/ui/dashboard/navbar/navbar'
import Footer from '~/ui/dashboard/footer/footer'
import Sidebar from '~/ui/dashboard/sidebar/sidebar'
import styles from '~/ui/dashboard/dashboard.module.scss'
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.content}>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout
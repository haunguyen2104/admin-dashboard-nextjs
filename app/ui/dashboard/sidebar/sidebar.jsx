import React, { use } from 'react'
import styles from '~/ui/dashboard/sidebar/sidebar.module.scss'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdPeople, MdAnalytics, MdHelpCenter, MdOutlineSettings, MdLogout } from 'react-icons/md'
import MenuLink from '~/ui/dashboard/sidebar/menuLink/menuLink'
import Image from 'next/image'
import { auth, signOut } from '../../../auth'
const Sidebar = async () => {
    const { user } = await auth()
    const menuItems = [
        {
            title: "Pages", list: [
                {
                    title: 'Dashboard',
                    path: '/dashboard',
                    icon: <MdDashboard />
                },
                {
                    title: 'Users',
                    path: '/dashboard/users',
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: 'Products',
                    path: '/dashboard/products',
                    icon: <MdShoppingBag />
                },
                {
                    title: 'Transactions',
                    path: '/dashboard/transactions',
                    icon: <MdAttachMoney />
                },
            ]
        },
        {
            title: "Analytics", list: [
                {
                    title: 'Revenue',
                    path: '/dashboard/revenue',
                    icon: <MdWork />
                },
                {
                    title: 'Reports',
                    path: '/dashboard/reports',
                    icon: <MdAnalytics />
                },
                {
                    title: 'Teams',
                    path: '/dashboard/teams',
                    icon: <MdPeople />
                },

            ]
        },
        {
            title: "Users", list: [
                {
                    title: 'Settings',
                    path: '/dashboard/settings',
                    icon: <MdOutlineSettings />
                },
                {
                    title: 'Help',
                    path: '/dashboard/help',
                    icon: <MdHelpCenter />
                },


            ]
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={user.img || "/noavatar.png"} alt='' width={50} height={50} className={styles.userImage} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item, index) => (
                            <MenuLink item={item} key={item + index} />
                        ))}
                    </li>
                ))}
            </ul>
            <form action={async () => {
                "use server"
                await signOut()
            }}>

                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    )
}

export default Sidebar
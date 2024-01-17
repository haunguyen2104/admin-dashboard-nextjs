import styles from './footer.module.scss'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>UI</div>
            <div className={styles.text}>© All right reserved.</div>
        </div>
    )
}

export default Footer
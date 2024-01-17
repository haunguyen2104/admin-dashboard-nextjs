import styles from '~/ui/dashboard/dashboard.module.scss'
import Card from '~/ui/dashboard/card/card'
import Rightbar from '~/ui/dashboard/rightbar/rightbar'
import Transactions from '~/ui/dashboard/transactions/transactions'
import Chart from '~/ui/dashboard/chart/chart'
const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>

                    <Card title={"Total User"} number={'10.237'} difference={2} />
                    <Card title={"Total User"} number={'10.237'} difference={12} />
                    <Card title={"Total User"} number={'10.237'} difference={-12} />
                </div>
                <Transactions />
                <Chart />

            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )
}

export default Dashboard
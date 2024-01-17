import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.scss'
const Card = ({ title, number, difference }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.titel}>{title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span className={difference > 0 ? styles.positive : styles.negative}>{difference}% </span>
          more than previous week
        </span>
      </div>
    </div>
  )
}

export default Card
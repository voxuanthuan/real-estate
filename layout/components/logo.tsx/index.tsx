import styles from './styles.module.scss'

export default function Logo() {
    return (<div className={styles.logoWrapper}>
        <p className={styles.companyTitle}>HODACE <span className={styles.netwrokTitle}>NETWORK</span></p>
        <p className={styles.slogan}>Giải pháp toàn vẹn cho dữ liệu</p>
    </div>)
}
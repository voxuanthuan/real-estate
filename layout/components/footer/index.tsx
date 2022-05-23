import { ZaloIcon, MessengerIcon } from '~/layout/components/icons';
import Logo from '../logo.tsx';
import styles from './styles.module.scss'

function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.infoContainer}>
                <div className={styles.Info}>
                    <b className={styles.footerTitle}>VỀ CHÚNG TÔI</b>
                    <p>Đội ngũ đồng hành</p>
                    <p>Môi trường làm việc</p>
                    <p>Chính sách &nbsp; điều khoản</p>
                </div>
                <div className={styles.Info}>
                    <b className={styles.footerTitle}>HODACE PREMIUM</b>
                    <p>Dữ liệu bất động sản</p>
                    <p>Tra cứu gói vay</p>
                    <p>Tra cứu chủ nhà</p>
                    <p>Tra cứu hoạt động người dùng</p>
                </div>
                <div className={styles.Info}>
                    <b className={styles.footerTitle}>LIÊN HỆ DỊCH VỤ</b>
                    <p><ZaloIcon /><MessengerIcon /></p>
                </div>
                <div className={styles.Info}>
                    <b className={styles.footerTitle}>LIÊN KẾT</b>
                    <div className={styles.socialMedia}>
                        <p>Mạng xã hội: </p>
                        <ZaloIcon /><MessengerIcon />
                    </div>
                </div>
            </div>
            <div className={styles.copyrightWrapper}>
                <div className={styles.logoContainer}>
                    <Logo />
                    <hr/>
                </div>
                <p className={styles.coppyrightContent}>Copyright @2020 All rights reserved by HODACE NETWORK</p>
                <p className={styles.coppyrightContent}>Ghi rõ nguồn "Hodace.Network" khi phát hành lại thông tin từ website này.</p>
            </div>
        </div>

    </footer>
}

export default Footer;
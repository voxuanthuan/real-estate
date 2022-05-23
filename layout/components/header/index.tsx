import Logo from '../logo.tsx'
import { HouseIcon, PhoneIcon, SearchIcon } from '~/layout/components/icons'
import styles from './styles.module.scss'

function Header() {
  const navItems = [{ icon: <HouseIcon />, name: 'Trang chủ', path: '' }, { icon: <PhoneIcon />, name: 'Gói Vay', path: '' }, { icon: <HouseIcon />, name: 'Chủ Nhà', path: '' }, { icon: <HouseIcon />, name: 'Điện thoại', path: '' }, { icon: <HouseIcon />, name: 'Thống kê', path: '' }]
  return <div className={styles.headerWrapper}>
    <div className={styles.headerContent}>
      <div className={styles.headerSearch}>
        <Logo />
          <div className={styles.searchWrapper}>
            <input className={styles.inputSearch} placeholder='Tìm kiếm' />
            <div className={styles.iconSearch}>
              <SearchIcon />
            </div>
        </div>
      </div>
      <nav className={styles.navigate}>
        <ul className={styles.listItem}>
          {
            navItems.map(item => <li className={styles.navItem} key={item.name}>{item.icon}
              <span>{item.name}</span></li>)
          }
        </ul>
      </nav>
    </div>
  </div>
}

export default Header
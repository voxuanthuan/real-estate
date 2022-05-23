import React from 'react'
import Chart from './components/chart-bar'
import styles from './styles.module.scss'

function StatisticalCard() {
  return (<div className={styles.cardContainer}>
    <div className={styles.cardHeader}>
      <div className={styles.cardTitle}>
        <h4 className={styles.title}>THỐNG KÊ SỐ LƯỢN BÀI ĐĂNG THEO KHU VỰC</h4>
        <p className={styles.desciprtion}>Đánh giá độ năng động của thị trường theo khu vực cụ thể</p>
      </div>
      <div className={styles.selector}>
        <select>Chọn Tỉnh</select>
        <select>Chọn QUận huyện</select>
      </div>
    </div>
    <div className={styles.chartBar}>
      <Chart />
    </div>
  </div>)
}
export default React.memo(StatisticalCard)
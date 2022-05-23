import React from 'react'
import Chart from './components/chart-bar'
import styles from './styles.module.scss'

interface IProps {
  color: string,
  type: string,
  title: string,
  description: string,
  label: string
  borderColor: string,
}

function StatisticalCard(props: IProps) {
  const {color, type, title, description, label, borderColor} = props
  return (<div className={styles.cardContainer}>
    <div className={styles.cardHeader}>
      <div className={styles.cardTitle}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desciprtion}>{description}</p>
      </div>
      <div className={styles.selector}>
        <select ><option value="" >Chọn tỉnh</option></select>
        <select><option value="" >Chọn QUận huyện</option></select>
      </div>
    </div>
    <div className={styles.chartContainer}>
      <Chart label={label} type={type} color={color} borderColor={borderColor}/>
    </div>
  </div>)
}
export default React.memo(StatisticalCard)
import Title from '../_sub_components/TItle'
import styles from './hobbies.module.css'

export default function Hobbies() {
  return (
    <div className={styles.WhenIDontCode}>
      <Title>趣味</Title>

      <div className={styles.HobbiesContainer}>
        <div mode='light' className={styles.Programming}></div>
        <div className={styles.Piano}></div>
        <div mode='light' className={styles.Reading}></div>
        <div mode='light' className={styles.Chess}></div>
      </div>
    </div>
  )
}
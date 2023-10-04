import Image from 'next/image'
import styles from '@/styles/page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.header}>Главная</h1>
      </div>
    </main>
  )
}

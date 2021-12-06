import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} style={{ margin: 0, overflow: 'hidden', padding: 0 }}>
      <main>
        <Sidebar />
        {/* Center */}
        <div style={{ height: ' 200vh' }}>asfasdf</div>
      </main>
    </div>
  )
}

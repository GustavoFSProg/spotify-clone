import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import NLW from '../public/nlw.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container} style={{ margin: 0, padding: 0 }}>
      <main style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
      </main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '110vh',
          color: 'yellow',
          // background: '#0d0d0d',
          marginLeft: '190px',
          height: 'inherit',
          width: 'inherit',
          background: 'linear-gradient(to bottom, #330000 30%, #0d0d0d 65%)',
        }}
      >
        <br />
      </div>
    </div>
  )
}

import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import Album from '../public/album-image.jpg'
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
          // justifyContent: 'center',
          // alignItems: 'center',
          // height: '110vh',
          color: 'yellow',
          // background: '#0d0d0d',
          marginLeft: '190px',
          height: 'inherit',
          width: 'inherit',
          background: 'linear-gradient(to bottom, #330000 30%, #0d0d0d 65%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginTop: '90px',
            marginLeft: '100px',
            width: '520px',
            height: '220px',
          }}
        >
          <Image src={Album} alt="Logo" width="208" height="37" />
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '-370px',
            marginLeft: '-290px',
            width: '620px',
            // height: '220px',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '60px', color: 'white' }}>
            <span style={{ fontSize: '10px', color: 'white' }}>LISTA DE REPRODUÇÃO</span>
            <br />
            Chalice of Thagirion
            <br />
            <div style={{ marginTop: '-28px', marginLeft: '3px' }}>
              <span style={{ fontSize: '14px', color: 'white' }}>
                Gustavo Sohne{' '}
                <span
                  style={{
                    color: '#b3b3b3',
                    fontSize: '13px',
                    marginLeft: '4px',
                    fontWeight: 'normal',
                  }}
                >
                  {' '}
                  - 11 músicas, 56 min 55 s
                </span>
              </span>
            </div>
          </h1>
        </div>

        <br />
      </div>
    </div>
  )
}

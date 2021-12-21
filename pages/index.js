import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import Album from '../public/album-image.jpg'
import Clock from '../public/circulo.png'
import Play from '../public/play-button.png'
import Image from 'next/image'
import { ContainerImage } from '../styles/styled-index'

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
        <div>
          <div
            style={{
              display: 'flex',
              marginTop: '-320px',
              width: '520px',
              height: '220px',
              marginLeft: '-32px',
            }}
          >
            <Image src={Album} alt="Logo" width="210" height="39" />
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '-215px',
              marginLeft: '198px',
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
            {/* <div style={{ marginTop: '10px' }}>
          </div> */}
          </div>
        </div>
      </div>
      <ContainerImage>
        <Image src={Play} alt="play-button" width="72" height="66" />
        <div
          style={{
            color: '#b3b3b3',
            letterSpacing: '3px',
            fontSize: '34px',
            marginTop: '-62px',
            marginLeft: '90px',
          }}
        >
          <span>...</span>
        </div>
        <table width="980px" style={{ color: '#8c8c8c', marginTop: '50px' }}>
          <thead
            style={{ color: '#8c8c8c', width: '100%', fontSize: '13px', fontWeight: 'normal' }}
          >
            <th width="40" style={{ fontWeight: 'normal' }}>
              #
            </th>
            <th style={{ fontWeight: 'normal', textAlign: 'left' }} width="310">
              TÍTULO
            </th>
            <th style={{ fontWeight: 'normal', textAlign: 'left' }} width="310">
              ÁLBUM
            </th>
            <th style={{ fontWeight: 'normal', textAlign: 'left' }} width="310">
              DATA ADICIONADA
            </th>
            <th style={{ fontWeight: 'normal', textAlign: 'left' }} width="100">
              <Image src={Clock} alt="Logo" width="30" height="25" />
            </th>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">
                <hr
                  width="965"
                  colSpan="5"
                  style={{ marginTop: '6px', border: '0.1px solid #262626' }}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td style={{ textAlign: 'center' }}>1</td>{' '}
              <td>
                <Image src={Album} alt="Logo" width="38" height="41" />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '48px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'white',
                      marginLeft: '3px',
                      marginTop: '-2px',
                    }}
                  >
                    Chalice of Tagirion
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginLeft: '-117px',
                      marginTop: '20px',
                    }}
                  >
                    Mephorast
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                Chalice of Tagirion
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                há 6 dias
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                5:24
              </td>
            </tr>
            <br />
            <tr>
              <td style={{ textAlign: 'center' }}>2</td>{' '}
              <td>
                <Image src={Album} alt="Logo" width="38" height="41" />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '48px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'white',
                      marginLeft: '3px',
                      marginTop: '-2px',
                    }}
                  >
                    Chalice of Tagirion
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginLeft: '-117px',
                      marginTop: '20px',
                    }}
                  >
                    Mephorast
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                Chalice of Tagirion
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                há 6 dias
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                5:24
              </td>
            </tr>

            <br />
            <tr>
              <td style={{ textAlign: 'center' }}>3</td>{' '}
              <td>
                <Image src={Album} alt="Logo" width="38" height="41" />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '48px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'white',
                      marginLeft: '3px',
                      marginTop: '-2px',
                    }}
                  >
                    Chalice of Tagirion
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginLeft: '-117px',
                      marginTop: '20px',
                    }}
                  >
                    Mephorast
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                Chalice of Tagirion
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                há 6 dias
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                5:24
              </td>
            </tr>

            <br />
            <tr>
              <td style={{ textAlign: 'center' }}>4</td>{' '}
              <td>
                <Image src={Album} alt="Logo" width="38" height="41" />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '48px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'white',
                      marginLeft: '3px',
                      marginTop: '-2px',
                    }}
                  >
                    Chalice of Tagirion
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginLeft: '-117px',
                      marginTop: '20px',
                    }}
                  >
                    Mephorast
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                Chalice of Tagirion
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                há 6 dias
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                5:24
              </td>
            </tr>

            <br />
            <tr>
              <td style={{ textAlign: 'center' }}>5</td>{' '}
              <td>
                <Image src={Album} alt="Logo" width="38" height="41" />
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '48px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'white',
                      marginLeft: '3px',
                      marginTop: '-2px',
                    }}
                  >
                    Chalice of Tagirion
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginLeft: '-117px',
                      marginTop: '20px',
                    }}
                  >
                    Mephorast
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                Chalice of Tagirion
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                há 6 dias
              </td>
              <td
                style={{
                  fontSize: '15px',
                  color: '#8c8c8c',
                  // marginLeft: '-117px',
                  marginTop: '20px',
                }}
              >
                5:24
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerImage>
    </div>
  )
}

import Header from './Header'
import { SectionHeader } from './Header/styles'
import MainPlayer from './MainPlayer'
import PlayList from './PlayList'
import { MainContainer } from './styles'
import Image from 'next/image'
import image from '/public/images/album-image.jpg'

const Main = () => (
  <MainContainer>
    <SectionHeader>
      <div style={{ marginTop: '60px', marginLeft: '15px' }}>
        <Image src={image} alt="imagem" width="190" height="210" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '13.3rem',
            marginTop: '-100px',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 'bold' }}>LISTA DE REPRODUÇÃO</span>
          <span style={{ fontSize: '46px', fontWeight: 'bold', marginTop: '15px' }}>
            Blood Magic Necromance
          </span>
          <span style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '22px' }}>
            Gustavo Sohne .{' '}
            <strong style={{ color: 'grey', fontWeight: 'normal' }}>8 músicas, 45 min 44s</strong>
          </span>
        </div>
      </div>
    </SectionHeader>
    <MainPlayer />
    <PlayList />
  </MainContainer>
)

export default Main

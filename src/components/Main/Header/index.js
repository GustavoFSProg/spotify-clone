import { SectionHeader } from './styles'
import image from '/public/images/album-image.jpg'
import Image from 'next/image'

const Header = () => (
  <SectionHeader>
    <div style={{ marginTop: '60px', marginLeft: '15px' }}>
      <Image src={image} alt="imagem" width="100" height="230" />
    </div>
  </SectionHeader>
)

export default Header

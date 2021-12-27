import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import album from '/public/images/album-image.jpg'
import { AlbumImage, ArtistTitle, Container, Links, MusicTitle, Icons } from './styles'

const CurrentMusic = () => (
  <Container>
    <AlbumImage>
      <Image src={album} alt="album" height="56px" width="56px" />
    </AlbumImage>

    <Links>
      <MusicTitle>All I Have to Do Is Dream</MusicTitle>
      <ArtistTitle>The Everly Brothers</ArtistTitle>
    </Links>

    <Icons>
      <HeartIcon stroke="#b3b3b3" width="16" />
    </Icons>
  </Container>
)

export default CurrentMusic

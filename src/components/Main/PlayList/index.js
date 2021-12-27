import { memo } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import image from '/public/images/album-image.jpg'

export const SectionPlayList = styled.section``

export const PlHeader = styled.header``
export const PlRow = styled.div`
  display: flex;
  /* grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr); */
`

const PlLine = ({ key, image, song, artist, album, dateAdded, favorite, duration }) => (
  <PlRow>
    <div>{key}</div>

    <div>
      <Image src={image} alt={album} />
      <div>
        <div>{song}</div>
        <div>{artist}</div>
      </div>
    </div>

    <div>{album}</div>

    <div>{dateAdded}</div>

    <div>
      {favorite && '<3'} {duration}
    </div>
  </PlRow>
)

const PlayList = () => {
  return (
    <SectionPlayList>
      <PlHeader># TITLE ALBUM DATE ADDED TIME-ICON</PlHeader>

      <PlLine
        key={12}
        image={image}
        song="Fake Plastic Trees"
        artist="Radiohead"
        album="The Bends"
        dateAdded="Feb 28, 2019"
        favorite={true}
        duration="4:14"
      />
    </SectionPlayList>
  )
}

export default memo(PlayList)

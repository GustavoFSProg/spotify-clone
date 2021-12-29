import { memo } from 'react'
import Image from 'next/image'

import { SectionPlayList, Grid, Column, Row, Title, P, Pm, ImgContainer } from './styles'
import { playListData } from './playListData'

const PlLine = ({ index, image, song, artist, album, dateAdded, favorite, duration }) => (
  <Grid>
    <Pm>{index}</Pm>

    <Row>
      <ImgContainer>
        <Image src={image} alt={album} height={40} width={40} />
      </ImgContainer>
      <Column>
        <div>{song}</div>
        <P>{artist}</P>
      </Column>
    </Row>

    <P>{album}</P>

    <P>{dateAdded}</P>

    <P>
      {favorite && 'heart'} {duration}
    </P>
  </Grid>
)

const PlayList = () => {
  return (
    <SectionPlayList>
      <Grid isHeader>
        <Title>#</Title>
        <Title>TITLE</Title>
        <Title>ALBUM</Title>
        <Title>DATE ADDED</Title>
        <Title>CLOCK</Title>
      </Grid>

      {playListData.map((l, i) => (
        <PlLine
          key={i}
          index={i + 1}
          image={l.image}
          song={l.song}
          artist={l.artist}
          album={l.album}
          dateAdded={l.dateAdded}
          favorite={l.favorite}
          duration={l.duration}
        />
      ))}
    </SectionPlayList>
  )
}

export default memo(PlayList)

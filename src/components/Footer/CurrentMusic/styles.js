import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  width: 30%;
`

export const AlbumImage = styled.div`
  margin-right: 1rem;
  width: 82px;
`

export const Links = styled.div`
  align-items: flex-start;
  justify-content: center;
  line-height: 130%;
  width: 100%;
`

export const MusicTitle = styled.p`
  font-size: 14px;
  transition: all ease 0.25s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ArtistTitle = styled.p`
  font-size: 11px;
  transition: all ease 0.25s;
  color: #b3b3b3;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Icons = styled.div`
  display: flex;
  width: 100%;
  max-width: 4rem;
  justify-content: center;
`

import styled from 'styled-components'

export const SectionPlayList = styled.section`
  padding: 0 2rem;
`

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1rem 6fr 4fr 3fr minmax(120px, 1fr);
  grid-gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: ${({ isHeader }) => (isHeader ? '1px solid rgba(255, 255, 255, 0.1)' : 'none')};
  margin-bottom: ${({ isHeader }) => (isHeader ? '1rem' : 'none')};
  align-items: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  max-width: 300px;
`
export const Title = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #b3b3b3;
`

export const P = styled.p`
  font-size: 14px;
  color: #b3b3b3;
`
export const Pm = styled.p`
  font-size: 16px;
  color: #b3b3b3;
`
export const ImgContainer = styled.div`
  margin-right: 1rem;
`

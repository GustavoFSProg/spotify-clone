import { memo } from 'react'
import styled from 'styled-components'

import Controls from './Controls'
import CurrentMusic from './CurrentMusic'
import Player from './Player'

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  background: #181818;
  padding: 0 16px;
`

const Footer = () => (
  <FooterContainer>
    <CurrentMusic />
    <Player />
    <Controls />
  </FooterContainer>
)

export default memo(Footer)

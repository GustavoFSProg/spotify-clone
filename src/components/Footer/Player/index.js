// import { memo } from 'react'

import { PlayerContainer } from './styles'
import Image from 'next/image'
import Play from '../../../../public/images/button-play.png'

const Player = () => (
  <PlayerContainer>
    <Image src={Play} alt="play-button" width="40" height="30" />
    <div
      style={{
        background: '#595959',
        borderRadius: '20px',
        width: '380px',
        marginTop: '15px',
        height: '5px',
      }}
    >
      <div
        style={{
          background: '#bfbfbf',
          borderRadius: '20px',

          width: '100px',
          height: '5px',
        }}
      ></div>
    </div>
  </PlayerContainer>
)

export default Player

// import { memo } from 'react'

import { PlayerContainer } from './styles'
import Image from 'next/image'
import Play from '../../../../public/images/button-play.png'

const Player = () => (
  <PlayerContainer>
    <Image src={Play} alt="play-button" width="40" height="30" />
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '6px' }}>
      <span style={{ color: '#bfbfbf', fontSize: '13.2px', marginTop: '6px', marginRight: '7px' }}>
        1:35
      </span>
      <div
        style={{
          background: '#595959',
          borderRadius: '20px',
          width: '420px',
          marginTop: '15px',
          height: '4px',
        }}
      >
        <div
          style={{
            background: '#bfbfbf',
            borderRadius: '20px',
            width: '150px',
            height: '4px',
          }}
        />
      </div>
      <span style={{ color: '#bfbfbf', fontSize: '13.2px', marginTop: '6px', marginLeft: '7px' }}>
        8:35
      </span>
    </div>
  </PlayerContainer>
)

export default Player

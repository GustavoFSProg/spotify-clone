// import { memo } from 'react'

import { PlayerContainer } from './styles'
import { CgPlayButtonO } from 'react-icons/cg'

const Player = () => (
  <PlayerContainer>
    <div style={{ marginRight: '13px', marginTop: '7px' }}>
      <CgPlayButtonO size="36" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-3px' }}>
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

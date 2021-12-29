// import { memo } from 'react'

import { PlayerContainer } from './styles'
import { CgPlayButtonO } from 'react-icons/cg'
import { CgPlayTrackPrev } from 'react-icons/cg'
import { CgPlayTrackNext } from 'react-icons/cg'
import { BiRedo } from 'react-icons/bi'

const Player = () => (
  <PlayerContainer>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '13px',
        marginTop: '7px',
      }}
    >
      <div style={{ marginRight: '10px', marginTop: '8px' }}>
        <CgPlayTrackPrev size="25" color="#a6a6a6" />
      </div>

      <CgPlayButtonO size="36" />

      <div style={{ marginLeft: '10px', marginTop: '8px' }}>
        <CgPlayTrackNext size="25" color="#a6a6a6" />
      </div>

      <div style={{ marginLeft: '15px', marginTop: '8px' }}>
        <BiRedo size="21" color="#a6a6a6" />
      </div>
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

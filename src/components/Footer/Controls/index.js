import Image from 'next/image'
import { memo } from 'react'
import Microfone from '../../../../public/images/microfone.jpg'
import { FaElementor } from 'react-icons/fa'
import { AiOutlineSound } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import { FiFileMinus } from 'react-icons/fi'

import { ControlsContainer } from './styles'

const Controls = () => (
  <ControlsContainer>
    <div style={{ marginRight: '13px', marginTop: '4px' }}>
      <BiMicrophone width="16" height="19" />
    </div>
    <div style={{ marginRight: '13px', marginTop: '4px' }}>
      <FiFileMinus size="16" />
    </div>
    <div style={{ marginRight: '13px', marginTop: '4px' }}>
      <AiOutlineSound size="16" />
    </div>
    <div
      style={{
        background: '#595959',
        borderRadius: '20px',
        width: '100px',
        marginTop: '2px',
        height: '4px',
      }}
    >
      <div
        style={{
          background: '#bfbfbf',
          borderRadius: '20px',
          width: '50px',
          height: '4px',
        }}
      />
    </div>
  </ControlsContainer>
)

export default memo(Controls)

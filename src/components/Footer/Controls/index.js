import Image from 'next/image'
import { memo } from 'react'
import Microfone from '../../../../public/images/microfone.jpg'
import { FaElementor } from 'react-icons/fa'
import { AiOutlineSound } from 'react-icons/ai'

import { ControlsContainer } from './styles'

const Controls = () => (
  <ControlsContainer>
    <div style={{ marginRight: '15px', marginTop: '4px' }}>
      <Image src={Microfone} alt="imagem" width="19" height="19" />
    </div>
    <div style={{ marginRight: '15px', marginTop: '4px' }}>
      <FaElementor size="19" />
    </div>
    <div style={{ marginRight: '15px', marginTop: '4px' }}>
      <AiOutlineSound size="19" />
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

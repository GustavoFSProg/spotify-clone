import Image from 'next/image'
import { memo } from 'react'

import Logo from '/public/images/logo.png'
import { playLists, buttons } from './helper'
import Button from './Button'
import { SidebarContainer, ImageContainer, Divider, PlayList, PlayLists } from './style'

const Sidebar = () => (
  <SidebarContainer>
    <ImageContainer>
      <Image src={Logo} alt="Logo" width="128" height="37" />
    </ImageContainer>
    <div style={{ marginLeft: '12px' }}>
      {buttons.map((b) => (
        <Button key={b.title} onClick={b.onClick} Icon={b.Icon} title={b.title} />
      ))}
    </div>

    <Divider />
    {/* <div style={{ marginLeft: '12px' }}> */}
    <PlayLists>
      {playLists.map((p, i) => (
        <PlayList key={i}>{p.title}</PlayList>
      ))}
    </PlayLists>
    {/* </div> */}
  </SidebarContainer>
)

export default memo(Sidebar)

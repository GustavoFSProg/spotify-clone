import Image from 'next/image'
// import Logo from '../logo.png'
import Logo from './logo-branco.png'

import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'
import { Buttom, ScrollBar, Container, PlayLists } from './sidebar-style'

function Sidebar() {
  return (
    <>
      <Container>
        <div style={{ marginTop: '20px', marginLeft: '45px', marginBottom: '50px' }}>
          <div style={{ marginTop: '10px', marginBottom: '18px' }}>
            <Image src={Logo} alt="Logo" width="128" height="37" />
          </div>
          <Buttom onClick={() => alert('Go to Home')}>
            <HomeIcon width="26" />
            <p
              style={{
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Home
            </p>
          </Buttom>

          <Buttom
            onClick={() => alert('Go to Home')}
            style={{
              width: '120px',
              display: 'flex',
              border: 'none',
              flexDirection: 'row',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <SearchIcon width="26" />
            <p
              style={{
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Search
            </p>
          </Buttom>

          <Buttom
            onClick={() => alert('Go to Home')}
            style={{
              width: '160px',
              display: 'flex',
              cursor: 'pointer',
              border: 'none',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <LibraryIcon width="26" />
            <p
              style={{
                // fontSize: '15px', marginLeft: '10px', marginTop: '20px'
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Your Libreary
            </p>
          </Buttom>

          <Buttom
            onClick={() => alert('Go to Home')}
            style={{
              width: '190px',
              display: 'flex',
              cursor: 'pointer',
              border: 'none',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <PlusCircleIcon width="26" />
            <p
              style={{
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Create PlayList
            </p>
          </Buttom>

          <Buttom
            onClick={() => alert('Go to Home')}
            style={{
              width: '160px',
              display: 'flex',
              cursor: 'pointer',
              border: 'none',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <HeartIcon width="26" />
            <p
              style={{
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Liked Songs
            </p>
          </Buttom>

          <Buttom
            onClick={() => alert('Go to Home')}
            style={{
              width: '160px',
              display: 'flex',
              cursor: 'pointer',
              border: 'none',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <RssIcon width="26" />
            <p
              style={{
                fontSize: '13.4px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '16px',
              }}
            >
              Your Episodes
            </p>
          </Buttom>
          <div style={{ marginBottom: '28px' }} />

          <hr style={{ border: '1px solid #333333', width: '78%', marginLeft: '5px' }} />
          <ScrollBar>
            <div style={{ marginLeft: '55px' }}>
              <PlayLists>Melhores.</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Metal</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Rock.</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>
              <PlayLists>Playlists names...</PlayLists>

              <PlayLists>Playlists names...</PlayLists>
            </div>
          </ScrollBar>
        </div>
      </Container>
    </>
  )
}

export default Sidebar

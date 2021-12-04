import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'
// import '../styles/Sidebar.module.css'
import { Buttom, Container } from './sidebar-style'
// import Home from '../pages'

function Sidebar() {
  return (
    <>
      <Container>
        <div style={{ marginTop: '20px' }}>
          <Buttom onClick={() => alert('Go to Home')}>
            <HomeIcon width="25" />
            <p
              style={{
                fontSize: '15px',

                marginTop: '20px',

                marginLeft: '10px',
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
            <SearchIcon width="25" />
            <p style={{ fontSize: '15px', marginLeft: '10px', marginTop: '18px' }}>Search</p>
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
            <LibraryIcon width="25" />
            <p style={{ fontSize: '15px', marginLeft: '10px', marginTop: '20px' }}>Your Libreary</p>
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
            <PlusCircleIcon width="25" />
            <p style={{ fontSize: '15px', marginLeft: '10px', marginTop: '18px' }}>
              Create PlayList{' '}
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
            <HeartIcon width="25" />
            <p style={{ fontSize: '15px', marginLeft: '10px', marginTop: '18px' }}>Liked Songs</p>
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
            <RssIcon width="25" />
            <p style={{ fontSize: '15px', marginLeft: '10px', marginTop: '19px' }}>Your Episodes</p>
          </Buttom>
          <hr className="border-t-[0.1px] border-gray-900" />
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
          <p style={{ color: 'white' }}>Playlists names...</p>
        </div>
      </Container>
    </>
  )
}

export default Sidebar

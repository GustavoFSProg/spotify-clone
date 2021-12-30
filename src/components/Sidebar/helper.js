import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'

export const buttons = [
  { onClick: () => alert('Go to Home'), Icon: HomeIcon, title: 'Home' },
  { onClick: () => alert('Go to Home'), Icon: SearchIcon, title: 'Search' },
  { onClick: () => alert('Go to Home'), Icon: LibraryIcon, title: 'Your Libreary' },
  { onClick: () => alert('Go to Home'), Icon: PlusCircleIcon, title: 'Create PlayList' },
  { onClick: () => alert('Go to Home'), Icon: HeartIcon, title: 'Liked Songs' },
  { onClick: () => alert('Go to Home'), Icon: RssIcon, title: 'Your Episodes' },
]

export const playLists = [
  { title: 'Melhores.' },
  { title: 'Playlists names...' },
  { title: 'Metal' },
  { title: 'Playlists names...' },
  { title: 'Rock.' },
  { title: 'Metal' },
  { title: 'Pop Songs' },
  { title: 'Rock Songs.' },
  { title: 'Metal' },
  { title: 'Playlists names...' },
  { title: 'Rock.' },
  { title: 'Metal' },
  { title: 'Pop Songs' },
  { title: 'Rock Songs.' },
]

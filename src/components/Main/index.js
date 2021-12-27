import Header from './Header'
import MainPlayer from './MainPlayer'
import PlayList from './PlayList'
import { MainContainer } from './styles'

const Main = () => (
  <MainContainer>
    <Header />
    <MainPlayer />
    <PlayList />
  </MainContainer>
)

export default Main

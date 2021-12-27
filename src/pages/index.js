import styled from 'styled-components'

import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import Main from 'components/Main'

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  width: 100%;
  padding: 0;
  margin: 0;
`

const Home = () => (
  <>
    <Container>
      <Sidebar />
      <Main />
    </Container>

    <Footer />
  </>
)

export default Home

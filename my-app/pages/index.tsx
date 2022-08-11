import { Button } from 'antd'
import type { NextPage } from 'next'
import Container from '../components/Container/index'
import Header from '../components/Header/index'
import { userAPI } from '../components/utils/slice/userService'

const Home: NextPage = () => {
  return (
    <>
      <Header>
        <Container>
          <Button type="primary">Main Page</Button>
        </Container>
      </Header>
    </>
  )
}

export default Home

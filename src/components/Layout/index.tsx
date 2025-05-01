import { ReactNode } from 'react'
import styled from '@emotion/styled'
import Header from '../Header'
// import Footer from '../Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  padding: 24px;
`

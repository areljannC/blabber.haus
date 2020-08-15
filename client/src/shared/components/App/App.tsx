import React, { FC } from 'react'
import styled from '../Styled'
import { LandingPage } from '../../../pages'

// Component
const App: FC = () => (
  <AppContainer>
    <LandingPage />
  </AppContainer>
)

// Styled Components
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: ${props => props.theme.colors.background};
`

// Display Name
App.displayName = `App`
AppContainer.displayName = `AppContainer`

export default App

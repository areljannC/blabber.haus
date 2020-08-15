import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Splash } from './components'

// Component
const LandingPage: FC = () => (
  <LandingPageContainer>
    <Splash />
  </LandingPageContainer>
)

// Styles
const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Display Names
LandingPage.displayName = `LandingPage`
LandingPageContainer.displayName = `LandingPageContainer`

export default LandingPage
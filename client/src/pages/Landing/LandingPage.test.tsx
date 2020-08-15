import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'

// Test Suite
describe(`src/pages/Landing/LandingPage`, () => {
  test(`renderes <LandingPage /> to the page`, () => {
    const { container } = render(<LandingPage />)
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})

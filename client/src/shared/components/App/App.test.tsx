import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// Test Suite
describe(`src/shared/components/App`, () => {
  test(`renders <App /> to the page`, () => {
    render(<App />)
    expect(screen.getByText(`Hello Mars.`)).toBeInTheDocument()
  })
})
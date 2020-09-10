import React from 'react'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

test('render about Navbar', () => {
  render(<App />)
  expect(
    screen.getByText('Place sticky footer content here.')
  ).toBeInTheDocument()
})


import { render, screen, userEvent } from './utils/test-utils'
import { describe, expect, it } from "vitest"
import App from './App'

import AddAlbum from './components/AddAlbum';
import Album from './components/Album';

const isDev = process.env.NODE_ENV === 'development'

test.skipIf(isDev)('prod only test', () => {
  // this test only runs in production
})

test ('should render Add button', () => {

  render(<AddAlbum/>)
  const element = screen.getByTestId('addButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})

test ('should render delete button', () => {

  render(<Album/>)
  const element = screen.getByTestId('deleteButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
test ('should render the title', () => {

  render(<Album/>)
  const element = screen.getByTestId('titleId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
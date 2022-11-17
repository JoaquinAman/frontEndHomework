
import { render, screen, userEvent } from './utils/test-utils'
import { describe, expect, it } from "vitest"
import App from './App'

import AddAlbum from './components/AddAlbum';
import AddUser from './components/AddUser';
import Album from './components/Album';
import User from './components/User';


const isDev = process.env.NODE_ENV === 'development'

test.skipIf(isDev)('prod only test', () => {
  // this test only runs in production
})

test ('should render Add button', () => {

  render(<AddUser/>)
  const element = screen.getByTestId('addButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})

test ('should render delete button', () => {

  render(<User/>)
  const element = screen.getByTestId('deleteButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
test ('should render the user name', () => {

  render(<User/>)
  const element = screen.getByTestId('userNameId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
test ('should render the user email', () => {

    render(<User/>)
    const element = screen.getByTestId('userEmailId')
    expect(element).toBeDefined();
    // userEvent.click(screen.getByRole('button'))
  
    
  })
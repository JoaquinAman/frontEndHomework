
import { render, screen, userEvent } from './utils/test-utils'
import { describe, expect, it } from "vitest"
import App from './App'

import AddAlbum from './components/AddAlbum';
import AddUser from './components/AddUser';
import Album from './components/Album';
import User from './components/User';
import Post from './components/Post';
import AddPost from './components/AddPost';


const isDev = process.env.NODE_ENV === 'development'

test.skipIf(isDev)('prod only test', () => {
  // this test only runs in production
})

test ('should render Add button', () => {

  render(<AddPost/>)
  const element = screen.getByTestId('addButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})

test ('should render delete button', () => {

  render(<Post/>)
  const element = screen.getByTestId('deleteButtonId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
test ('should render the post title', () => {

  render(<Post/>)
  const element = screen.getByTestId('postTitleId')
  expect(element).toBeDefined();
  // userEvent.click(screen.getByRole('button'))

  
})
test ('should render the post body', () => {

    render(<Post/>)
    const element = screen.getByTestId('postBodyId')
    expect(element).toBeDefined();
    // userEvent.click(screen.getByRole('button'))
  
    
  })
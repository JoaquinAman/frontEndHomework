
// import { render, screen, userEvent } from './utils/test-utils'
// import { describe, expect, it } from "vitest"
// import App from './App'


// describe('Simple working test', () => {
//   it('the title is visible', () => {
//     render(<App />)
//     expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
//   })

// })

import { assert, test } from 'vitest'

const isDev = process.env.NODE_ENV === 'development'

test.skipIf(isDev)('prod only test', () => {
  // this test only runs in production
})
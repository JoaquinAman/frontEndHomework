import '@testing-library/jest-dom'
//setupJest.js or similar file
require('jest-fetch-mock').enableMocks()

// tests/setup.ts
import {
    afterAll,
    afterEach,
    beforeAll,
  } from 'vitest';
  import { fetch } from 'cross-fetch';
  
 
  
  // Add `fetch` polyfill.
  global.fetch = fetch;
  

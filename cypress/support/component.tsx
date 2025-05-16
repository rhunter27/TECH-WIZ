// Import Cypress commands
import './commands'

// Import mount utility from cypress/react (or cypress/react18 if using React 18+)
import { mount } from '@cypress/react'

// Make the `mount` function globally available
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

// Attach mount function to Cypress
Cypress.Commands.add('mount', mount)

// Optionally, you can set up global styles or providers here
// Example:
// import '../src/index.css'

// Example: wrap components with providers (if using React Context or other wrappers)
// import { MyProvider } from '../../src/MyProvider'
// Cypress.Commands.add('mountWithProvider', (component) => {
//   return mount(<MyProvider>{component}</MyProvider>)
// })

// Now you can use `cy.mount(<Component />)` in your component tests

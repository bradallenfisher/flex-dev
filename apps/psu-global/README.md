# PSU Global

## Development

- Install project dependencies
  ```sh
  yarn install
  ```
- Create a local env file (`.env.local`)
  ```sh
  # From this directory.
  cp .env.example .env.local
  ```

  Optionally, you can pull the environment variables that are defined in Vercel by globally installing the [Vercel CLI](https://vercel.com/docs/cli):

  ```sh
  yarn global add vercel
  ```

  Once `vercel` is installed on your computer, you can save the environment variables to your local:

  ```sh
  # From this directory.
  vercel env pull --environment=development .env.local
  ```
- Start the NextJS application
  ```sh
  yarn workspace psu-global dev
  ```

## Running Cypress tests
- `yarn workspace psu-global cypress:open` to run Cypress tests in UI mode
- `yarn workspace psu-global e2e` to run Cypress e2e tests in UI mode
- `yarn workspace psu-global e2e:headless` to run Cypress e2e tests in headless mode


## Reference
- [Cypress](https://www.cypress.io/)
- [Vercel CLI](https://vercel.com/docs/cli)
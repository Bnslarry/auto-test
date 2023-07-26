# React + TypeScript + Vite

## init stepup

### install jest
pnpm install --save-dev jest @types/jest @jest/types

### init jest
npx jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … no

### install babel and chore configuration
pnpm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

pnpm install ts-node --save-dev

pnpm install jest-environment-jsdom --save-dev

pnpm install @types/node --save-dev
# Invoicing Application
This application had been created as a part of Wave Front-end Challenge.

## Demonstrated the usage of the following libraries/components
1) VUEX. What is Vuex?
    - Vuex is a state management pattern + library for Vue.js applications
    - Link: https://github.com/vuejs/vuex
    - Demonstration of Persisted State Behavior.

2) Bootstrap Library

3) SASS Preprocessor & Autofixer

4) Cypress. What is cypress?
    - Cypress is a E2E testing framework for anything that runs in the browser.
    - Link: https://www.cypress.io/

## Implementation Details
1) Implementation of all the aspects of the framework, such as router, store (vuex), persisted state, e2e testing.
2) Implenmentation of SCSS, which shows the ability to work with various style languages & setup.
3) Implementation of linting & documentation.
4) Creating environment files.
5) Ability to work with packages, frameworks as well as knowlegefull implmentation of tree shaking.

## Other Features that can be implemented. 
- Unit testing. 
- CI/CD Setup.
- Implementation of JSON Server/Stub for local stubbing.



# Project Setup Instructions

## Cloning the project locally
- In order to run the project locally you would need to clone the repository. Please run the following commands in order to clone the project using the choice of your terminal/operating system.
```
git clone https://github.com/kunalrrv/invoicing.git
cd invoicing
```

## Project setup
- In order to run the project, you will need to have all the required dependencies for the project. Please run the following command in order to install all the dependencies.
```
npm install
---OR---
yarn
```

### Compiles and hot-reloads for development
- In order to start a development server, you can run the following command from the terminal
```
npm run serve
---OR---
yarn serve
```

- Once the server starts, you can access the application by opening your browser and the URL as `http://localhost:8080`
- In order to check your application size & bundle size, you can access the URL `http://localhost:8888` to see the bundle analyzer screen. 

- In order to run the application in production mode, you can run the following command from the terminal
```
npm run serve:prod
---OR---
yarn serve:prod
```

### Compiles and minifies for production
- In order to create a build for the project, you can run the following command from the terminal.
```
npm run build
---OR---
yarn build
```

### Lints and fixes files
- In order to lint the files based on your configuration. You can run the following command from the terminal.
```
npm run lint
---OR---
yarn lint
```


### E2E (End To End Testing)
- In order to perform end to end testing, you can run the following command
```
npm run e2e
---OR---
yarn e2e
```

- In order to perform end to end testing in interactive mode with the Cypress window open, you can run the following command
```
npm run e2e:persist
---OR---
yarn e2e:persist
```

- Cypress runs e2e test on its default electron browser in headless mode, but if you would like to run e2e tests in terminal with chrome (header), please run the following command
```
npm run e2e:chrome
---OR---
yarn e2e:chrome
```
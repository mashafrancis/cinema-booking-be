<div align="center">

## cinema-booking-api

![CI](https://github.com/mashafrancis/cinema-booking-fe/workflows/CI/badge.svg)
[![CircleCI](https://circleci.com/gh/mashafrancis/cinema-booking-be.svg?style=svg)](https://circleci.com/gh/mashafrancis/cinema-booking-be)
[![Maintainability](https://api.codeclimate.com/v1/badges/7dbf8fd0e5601ecd258f/maintainability)](https://codeclimate.com/github/mashafrancis/cinema-booking-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7dbf8fd0e5601ecd258f/test_coverage)](https://codeclimate.com/github/mashafrancis/cinema-booking-be/test_coverage)

</div>

<div align="center">

    Cinema booking frontend application

  [![Cinema](../public/images/readme.svg)](https://cinema.booking-staging.herokuapp.com/)

  #### Simple but complicated movie booking

</div>

## Description
This app is to ease your the booking for a movie from the comfort of your home.

### Development set up
1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/mashafrancis/cinema-booking-fe`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable).
5. Run `yarn install` on the terminal to install dependencies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the. `.env.example`
7. Setup local development server.

- Save changes and quit the editor.

### Development server

Run `yarn start:dev` for a dev server. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `yarn test:unit` to execute the unit tests. This is achieved through the use of jest package which is used to test javascript code .

### Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

### Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).


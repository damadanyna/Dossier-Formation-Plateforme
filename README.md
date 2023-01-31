# Dossier formation

Made with ❤️ & [React](https://fr.reactjs.org/)

## Setup

### Install dependencies

To get started, you need [NodeJS](https://nodejs.org/en/download/) installed on your machine.

Then you need [Yarn](https://yarnpkg.com/getting-started/install) installed as it is used as the default dependency manager for this project, instead of using npm, the default dependecy manager provided with the NodeJS installation

***Wanna know why, because yarn is doing package installation in parallel, resulting in a better perfomance over its default counterpart :)***

### Setting up the project

To install all the required dependencies, just run

`yarn` or `yarn install` (calling `yarn` without argument is the same as calling `yarn install`)

## Development

### Available scripts

In the project directory, you can run:

`yarn dev`

Runs the app in the development mode, which launch a development server whose link is specified on the terminal output

`yarn build`

Builds the app for production
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

For more info about deployment, see the section about [deployment](https://vitejs.dev/guide/static-deploy.html) in the documentation

`yarn preview`

Run a static web server based on the build files after a build is run
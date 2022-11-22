# Sango & Co. Project Overview

This is a full stack application built on a MERN STACK
* MongoDb
* ExpressJs
* React
* Node

Additional technologies used to deploy this application are:
* NGINX
* Docker
* Kubernetes
* Microsoft Azure
* Azure DevOps

## Available Scripts

You are able to run the following scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `docker build -t sango-and-co:0.0.1 .`

Builds a docker image for the production version of the application.

### `docker run --name sango-and-co-client -p 80:80 sango-and-co:0.0.1`

Runs a container with the built image on port ...

### `docker exec -it [container] sh`

Enters into your run Container. Web files can be found if /static 

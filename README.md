# CrewFire Fullstack Code Challenge

## The challenge

Building an API that can read data from Flickr's public api, then build frontend web apps that consume and display the loaded data (images)

## Solution Design decisions:

- Monorepo structure for the whole stack, having the api (business logic) as the center of our application
- Create flickr as a provider class, and injected into the photos service. Allowing loose coupling between the domain and the infrastructure (in case we want to use another public/private api as source)
- Typescript across the whole stack, sharing interfaces for design-time type checking between the backend and the frontend, making sure the backend is providing what the frontend is expecting
- UI web apps are created in the Frontends folder, **the upwork job positing was for a MEAN stack position** but the challenge was for a React app, so I built both a react and angular identical apps (sorry if the react app is messy, i'm used to angular much more)
- Using package.json scripts to run all the apps at once during development (npm start) and build everything under a single deployable dist folder
- Running the built Api will open the api at port 1204, with a single route to /photos module and extra static routes to serve the built front end apps under hostname:1204/react and hostname:1204/angular

## Viewing the results:

frontends:

http://45.77.126.111:1204/react

http://45.77.126.111:1204/angular

backend:

http://45.77.126.111:1204/photos

## scripts :

To launch all dev servers :

`npm start`

To Build all

`npm run build`

To run the built package:

`npm run launch-build`

To deploy: (it simply copies the dist file to a vps for demonstration purposes)

`npm run deploy`

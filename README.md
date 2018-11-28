# The Forge

A user-friendly web application based on create-react-app for Game Masters and Authors to organize their world creation in a concise way.

## Setup

1. Clone this repo
2. Create a Postgres database with any appropriate name
3. Go to the server folder: `cd server`
4. Following the .env.example, create a .env file `cp .env.example .env`, replace the field by the link of your database
5. Install the dependencies: `npm i`
6. Run migrations: `node_modules/.bin/sequelize db:migrate`
7. Run the seed: `node_modules/.bin/sequelize db:seed:all`
8. Open up the server: `node server.js`
9. Go to the client folder: `cd client`
10. Install the dependencies: `npm i`
11. Open up the apollo-client: `yarn start`
12. Visit `localhost:3000` in your browser

### Screenshot
Responsive Homepage View

<a href="https://imgur.com/XTBzFoH"><img width="20%" height="20%" border="0" src="https://i.imgur.com/XTBzFoH.gif" title="source: imgur.com" /></a>

### Collaborators
- [Shawn-Philippe](https://github.com/Levasseur-Sp)
- [David](https://github.com/Sonchucks)
- [Konstantin](https://github.com/ktoroshchin)
- [Zachary](https://github.com/zacharylee97)

# Forge

A a user-friendly web application for all Dungeon Masters/Game Masters who would like to organize their homebrew campaigns.

## Setup

Based on create-react-app

1. Clone this repo
2. Create a Postgres database with any appropriate name
3. Go to the server folder: `cd server`
4. Following the .env.example, create a .env file `cp .env.example .env`, replace the field by the link of your database
5. Install the dependencies: `npm i`
6. Run migrations: `knex migrate:latest`
7. Run the seed: `knex seed:run`
8. Open up the server: `node server.js`
9. Go to the client folder: `cd client`
10. Install the dependencies: `npm i`
11. Open up the apollo-client: `yarn start`
12. Visit `localhost:3000` in your browser

### Collaborators

[Zachary](https://github.com/zacharylee97)
[David](https://github.com/Sonchucks)
[Shawn-Philippe](https://github.com/Levasseur-Sp)
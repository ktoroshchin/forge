# The Forge
What is FORGE ?

A user-friendly web application based on create-react-app for Game Masters and Authors to organize their world creation in a concise way. 
So two of my friends are Dungeon Master’s for a game called Dungeons and Dragons. For those who are not aware of what that is, it’s a tabletop role-playing game where a group of friends get together and one person, the Dungeon Master takes the other players through a campaign set inside a premade world or a world of their creation. My two friends really enjoy creating their own world but time and time again I’ve heard them complain about where they placed a certain piece of information and how annoying it is to constantly have to organize everything themselves . What if, as you created your world, everything was organized for you with the option of uploading your own World Map, being able to place markers for different aspects and clicking on said marker displays a brief amount of information of that aspect without you having to dig through different files and folders. That’s what the Forge is all about, helping game masters and authors organize their world.

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

### Tech Stack
- React
- Node.js
- Apollo
- Leaflet
- SASS
- Bootstrap
- GraphQL
- Sequelize
- PostgresQL

### Collaborators
- [Shawn-Philippe Levasseur](https://github.com/Levasseur-Sp)
- [David Son](https://github.com/Sonchucks)
- [Konstantin Toroshchin](https://github.com/ktoroshchin)
- [Zachary Lee](https://github.com/zacharylee97)

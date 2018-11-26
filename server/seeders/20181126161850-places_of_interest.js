'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interesting_places', [
      // El'Karath: Norgrum
      {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Lazy Harpy',
        description: 'Largest magic shop in the city, been there almost as long as the city as well. The owner, Mulok Bristlecloak, opened it in the first expansion of the city when the commercial distract was constructed. Making it the place for all potions or items. Deals with primarily basic items but interesting items have a tendency to come in.'
      }, {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Iron Focus',
        description: 'The only place in the city where you can buy a firearm. It is very rare that an outsider can buy a firearm but it is possible if certain requirements are met. If they are met, there are 4 firearms someone can shoot from, which are weaker than the ones made for Norgrum soldiers but can still pack pack wallop.'
      }, {
        id: uuid(),
        marker_id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Fighting Pits',
        description: 'The Norgrum fighting pits are constantly buzzing. They were first created for the miners who needed a way to blow off steam. They dug out a section of the mountain and put in the pits and equipped them with a tavern. They have grown in popularity since and there are constant competitions where people can win gold or other prizes.'
      },
      // El'Karath: Illeysnore
      {
        id: uuid(),
        marker_id: 'f24b99ef-8340-456f-8205-266d9c4361d8',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Arcane Gateway',
        description: 'Largest magic shop in Illeysnore, potentially on the continent. Can find some of the rarest items here. Large stock of all basic items/potions as well. Run by Sarnan Thexidor, she has a staff of about 30 who enchant and prepare for her.'
      }, {
        id: uuid(),
        marker_id: 'f24b99ef-8340-456f-8205-266d9c4361d8',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Careful Stars',
        description: 'Treetop inn, very nice and quite expensive because of it. Best beds, food and drinks for any one willing to pay the price. Owned and run by Grena Sylfina.'
      }, {
        id: uuid(),
        marker_id: 'f24b99ef-8340-456f-8205-266d9c4361d8',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Cheering Shield',
        description: 'Treetop blacksmith. The smith, Brycyne Zintris is expert with rare materials, primarily with mithral but one of the few places to get obsidian weapons and armor should they be desired. All weapons and armor sold here are a base +1 weapon or armor.'
      },
      // El'Karath: Lyanshara
      {
        id: uuid(),
        marker_id: '96be8000-2936-43d2-b1e4-bd280f2b0a3f',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Lying Owl',
        description: 'Largest and one of the nicest Inns and taverns in the Kingdom. Over 50 rooms and a plentiful pick of alcohol. Run by Darunia Krisdove, a middle aged Elven woman.'
      }, {
        id: uuid(),
        marker_id: '96be8000-2936-43d2-b1e4-bd280f2b0a3f',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Fire Spire',
        description: 'The largest elven armory in the continent. It supplies the weapons and armor to the royal family of Lyanshara and the royal guard. It is open to the public and has many well crafted and enchanted weapons and armor. The main smith is an older elven, Jassin Luro.'
      }, {
        id: uuid(),
        marker_id: '96be8000-2936-43d2-b1e4-bd280f2b0a3f',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Humble Tome',
        description: 'One of the only magic shops in the town. The main enchanter of the shop is Renna Enberos, an elven wizard in her early hundreds. She has worked there since she was little and took over the shop when her teacher passed away.'
      }, {
        id: uuid(),
        marker_id: '96be8000-2936-43d2-b1e4-bd280f2b0a3f',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Hourglass',
        description: 'Acts as an apothecary but also has a good selection of potions available. Your standard healing potions with the occasion of falling upon some rarer potions.'
      },
      // El'Karath: Feyduin
      {
        id: uuid(),
        marker_id: '9fd3bf1b-6852-4d2b-a1d7-6a1195cb421c',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'The Misty Morning',
        description: 'Small inn with a handful of rooms. Tidy and well equipped. Owned and run by an older elven couple, Gorred and Soora Miafir.'
      }, {
        id: uuid(),
        marker_id: '9fd3bf1b-6852-4d2b-a1d7-6a1195cb421c',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Sleeping Owl',
        description: 'Small general goods store. Items mostly but some basic potions as well. Chance to find magical items'
      }, {
        id: uuid(),
        marker_id: '9fd3bf1b-6852-4d2b-a1d7-6a1195cb421c',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Temple to Selune',
        description: 'Owned and cared for by Belor Fasatra. He established the temple within the last 20 years and has about 100 of the inhabitants of Feyduin who come on a regular basis. Just behind the temple is a small home where Belor lives.'
      }, {
        id: uuid(),
        marker_id: '9fd3bf1b-6852-4d2b-a1d7-6a1195cb421c',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        name: 'Smelting Pot',
        description: 'Good size blacksmith shop for such a small town. Currently run by Cael Herven, the original owner left and opened a shop in Lyanshara and left it to Cael in his absence.'
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('interesting_places', null, {});
  }
};

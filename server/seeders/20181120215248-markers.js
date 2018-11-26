'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('markers', [
      // VILMUS
      {
        id: uuid(),
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        longitude: 1642.7421875,
        latitude: 1153.5703125,
        name: 'Jeena',
        population: 12000,
        government: 'Noocracy',
        description: 'Many tribes of wood elves, eons ago, decided the best course of action for survival \
                      would be to band together into a common clan to better fend off the blights of The Great Forest of June.',
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        category: 'City',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        longitude: 2101.5,
        latitude: 1238.5390625,
        name: 'Wolfrest',
        description: 'A kingdom build on iron and blood. They have two twins sisters as their leaders. \
                      They have the titles of \'Warrior Queens\'. They are hated by their citizens.',
        government: 'Aristocraty',
        population: 185778,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'City',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 650.1640625,
        latitude: 1135.96875,
        name: 'Akhad',
        description: 'A kingdom built under the Barren Wilds. The ceiling of sand is supported by the three arch-wizards of the city',
        government: 'Confederation',
        population: 24000,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 624.1640625,
        latitude: 1086.96875,
        name: 'Barren Wilds',
        description: 'Desolate plains to the west of civilization. No logical being live in those desert-like plains.',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 1846.7109375,
        latitude: 1032.125,
        name: 'The Great Forest of June',
        description: 'A forest filled with dangerous beasts and various forms of blights.',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2069.26953125,
        latitude: 1265.5625,
        name: 'Piho',
        description: 'A booming human religious town. It is home to the Church of Piety, a racist religious \
                      order which indoctrinates it\'s followers by making them kill a non-human to join.',
        population: 4600,
        government: 'Theocracy',
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2170.75,
        latitude: 1211.466796875,
        name: 'Bol',
        description: 'A coastal fishing town east of Wolfrest. It\'s main source of money is \
                      the fish they salt and export to the City.',
        population: 1080,
        government: 'Aristocracy',
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2332.46484375,
        latitude: 1194.564453125,
        name: 'Zezima',
        description: 'A small fortress inhabited by strong soldiers who have defected from Wolfrest. \
                      They live in open rebellion to the throne and hope to gain many followers in their \
                      quest to liberate the citizens of Wolfrest.',
        population: 350,
        government: 'Kraterocracy',
        commerce: '',
        defences: ''
      }, {
        id: '1ecc79d9-dd03-44f5-a2b2-08689c553342',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Town',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        latitude: 1606.92180,
        longitude: 2045.010457,
        name: 'Forde',
        description: 'A town up in the mountain range of Houi. They live primarily off of Rocky birds.',
        population: 1200,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        latitude: 1622.31511710433,
        longitude: 1204.328125,
        name: 'The Mountain Range of Houi',
        description: 'It longs the whole north perimeter of the continent. The north side is littered with the unknown',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 1571.5390625,
        latitude: 1310.60699621739,
        name: 'Farhum Lake',
        description: 'Said to be home to a fey entity, people often steer clear of this lake by fear of the forces of nature',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2362.46875,
        latitude: 514.62749345317,
        name: 'Dragonhead Ocean',
        description: 'There is a myth that during the war of the ages, an ancient dragon got it\'s head chopped off and droppend in this ocean',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        category: 'Location',
        map_id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        longitude: 2345.203125,
        latitude: 1095.9342892244,
        name: 'Krakowv',
        description: 'Mountain with deep tunnels of ancient dwarven civilizations',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      },
      // YMIR
      {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'City',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 495.55979418027,
        longitude: 689.978515625,
        name: 'Specter',
        description: 'North America\'s remnants. The city is located in an intricate system of tunnels with few expeditions sent to the surface',
        population: 450000,
        government: 'Autocracy',
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'Location',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 386.654719659333,
        longitude: 921.921875,
        name: 'White Désolation',
        description: 'After the french nuclear reactor exploded due to a terrorist attack back in the year 2409, the whole of Europe has become a radiaded wasteland.',
        population: null,
        government: null,
        commerce: '',
        defences: ''
      }, {
        id: uuid(),
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        category: 'Town',
        map_id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        latitude: 380.531848828957,
        longitude: 998.517578125,
        name: 'EDEN Project',
        description: 'Multiple scientists live there trying to rid Ymir of its new glacial age.',
        population: 130,
        government: 'Democrary',
        commerce: '',
        defences: ''
      },
      // El'Karath
      {
        id: 'e28041eb-d315-4595-a9c8-30eb123b16b2',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'City',
        map_id: null,
        latitude: null,
        longitude: null,
        name: 'Norgrum',
        description: 'Norgrum, the Dwarven Homestead of El’karath and main dwarven city in the East. Norgrum was officially established in the year 130 of the Age of Rest after the fall of the original homestead, Themgulir. Learning from their mistakes, they didn’t have their kingdom in the open at the base of a mountain. Instead, they built on top and into the mountain at the top of a ravine with only one way through it. They can see anything approaching it for over a mile. Thanks to its location, Norgrum has remained untouched by the minor attacks upon it during its early years. Despite being built centuries after the other homesteads of the continent, it didn’t take long to regain its former glory, and surpass it. Under the rule of the Ambershard family, Norgrum has gained respect by rulers of all other races, one of the strongest allies being Wyvaria.\n\
        Norgrum is built upon a mountain which is incredibly rich in resources. The mines are abundant with rare materials that are sent out all over the continent. They stone and metal that they pull from the mines also allows magic effects to take hold faster than normal so those are shipped to Wyvaria and Illysnore in large volumes.\n\
        Norgrum is a very technologically advanced city, thanks to the Grand Inventor, Navarti Fastspark, they have wonderful creations throughout the city. The main one that people know of is the automated lift that brings visitors up the cliff to the city without the use of pulleys. Much of the city guard and even part of the military force is comprised of sentinels, who look to be walking suits of armor. Clever enchanting and craftsmanship allows the suits of armor to move on their own and complete tasks and take orders. Norgrum is also known as the city of origin of firearms on El’Karath, despite rumours saying otherwise. They keep them mostly to themselves but it is possible for outsiders to purchase them under certain circumstances.',
        population: 30000,
        government: 'Dwarven Hierarchy',
        commerce: 'Fine metals and jewels, finely crafted weapons and armor',
        defences: 'Natural pretection and large military'
      }, {
        id: 'f24b99ef-8340-456f-8205-266d9c4361d8',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'City',
        map_id: 'f151a02d-9adc-4e5d-ae15-5920317bff2f',
        longitude: 544.599609375,
        latitude: 727.032802234424,
        name: 'Illeysnore',
        description: 'Illeysnore, the elven homestead, is the last great city still standing since the Age of Dragons. Similar to the other great cities, it was built using remnants of Remith, the ancient green dragon who controlled most of the eastern side of the continent. The main section of the treetop district where the royal palace sits, is held up using the ribcage attached to one of the largest Ooknac trees. It has remained there for thousands of years and the rest of the city was slowly expanded around it. The treetop disctrict is primarily for the upper and upper middle class, most of it in relation to the royal family or of great importance. The rest of the population lives on the ground near the treetop district. It contains most of the shops and homes for the general population. It is possible for someone from the lower district to come up to the upper but they must build their own home or business without assistance. It has occured many times where someone attemps to to move up, only to have the building fall not long after. As part of the culture, said building needs to remain there as a reminder.\n\
        Along with the dragonborns, elves have always had a strong connection with magic. They have never been on the same level as the dragonborns but they have had a strong influence on magic and its uses. The enchanters on Illeysnore reportedly created over a quarter of all the magical items on the contient. They have become more stingy on their magical items are can only be bought now and some more elaborate ones are sometimes given as gifts between nations. They use their magical abilities to dsiguise the treetop district from above and below. There are certain ways to see it but for visitors, most will never see the upper district.\n\
        The royal family is the same bloodline of the original ruler, Vesryn Farel.They have continued with this since the founding of the city with little push back.If the city has stayed succesful for this long under the same rule, why should they need to change ? Gantar Farel has been the ruler for nearely 150 years and has allowed Illeysnore to reach more people than ever before.Thanks to their expansion of the Ooknac groves, they have been able to produce more than normal over the past 30 years and have shipped them to more cities than previously thought possible, except to most of the human cities.The elves of Illeysnore have, for many years, had a great dislike towards humans.They deem them to be not their own people, but a mix of the already found races here on El’Karath.This has caused some issues with other races but also within some of the other elven cities as well.',
        population: 8000,
        government: 'Elven Royalty',
        commerce: 'Basic airships, magical and mithral items',
        defences: 'Treetop city, magical defenses'
      }, {
        id: '96be8000-2936-43d2-b1e4-bd280f2b0a3f',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'City',
        map_id: 'f151a02d-9adc-4e5d-ae15-5920317bff2f',
        longitude: 659.337890625,
        latitude: 931.608110895991,
        name: 'Lyanshara',
        description: 'Lyanshara is the largest elven city on the continent despite not being the oldest. They were originally established in year 660 of the Age of Prosperity. The main city was established first and expanded over the course of the next few hundred years. Because of their location, they did not build like Ilysnore instead they took inspiration from the neighbouring human cities and built a large castle for the royal family in the center and built homes and other districts all around. They began to deal a lot with the human cities, even over the elven cities, partly because of the ease of being so close, but the variety of goods available. From there, they continued to deal more and more with human cities until the number of half elves over took the number of full blooded elves.\n\
        The kingdom consists of Feyduin proper and 3 smaller towns, all within 50 km of the capital. There is Feyduin to the north, Thamhil to the East and Enorius to the South-West.\n\
        The Kingdom is connected by large stone roads, which are patrolled at all times by Royal Guards of Lyanshara. There are constant patrols where during periods of high volume of travellers, there can be a patrol of four guards every hour who go from town to town. There is very little crime committed since they are so well protected, making Lyanshara one of the best places for merchants to travel to.',
        population: 40000,
        government: 'Elven Hierarchy',
        commerce: 'Raw materials (Lumber)',
        defences: 'Medium size military force'
      }, {
        id: '9fd3bf1b-6852-4d2b-a1d7-6a1195cb421c',
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'Town',
        map_id: 'f151a02d-9adc-4e5d-ae15-5920317bff2f',
        longitude: 524.05859375,
        latitude: 1018.28663471609,
        name: 'Feyduin',
        description: 'The first expansion of the kingdom, Feyduin was founded in 870 of the Age of Prosperity. It became home to the first farmers as there were open plains with perfect soil for farming. Others simply preferred the lifestyle of the countryside as Lyanshara had become very large and bustling.\n\
        Feyduin has produced many of the best smiths in the kingdom. Some have moved to Lyanshara and opened quite successful shops, dealing with merchants from outside the kingdom and crafting more ceremonial type of weapons and armor. For the ones that stay behind in Feyduin, most of their work comes from making weapons and armor for Lyanshara’s military.',
        population: 800,
        government: 'Duke from royal family',
        commerce: 'Weapon/Armor for military',
        defences: 'Small brigade of main army'
      }, {
        id: uuid(),
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'Town',
        map_id: 'f151a02d-9adc-4e5d-ae15-5920317bff2f',
        longitude: 555.76953125,
        latitude: 865.714476148157,
        name: 'Thamhill',
        description: 'Situated near a grove of Kresildor trees, Thamhill has for a long time now been a large supplier of this special lumber that is incredibly light but as strong as steel. It is commonly used in airships. Because of this, the town has done quite well for itself. Thamhill sends lumber to Illeysnore to continue to build out the treetop district and for them to build airships. The second largest importer of this lumber is Wyvaria as they build their own airships.\n\
        The majority of the town is dedicated to the lumber trade, whether it is cutting the trees or processing the logs into lumber. There is a small shop of general goods  store and a barebones inn and tavern.',
        population: 700,
        government: 'Duke from royal family',
        commerce: 'Lumber',
        defences: 'Small brigade of main army'
      }, {
        id: uuid(),
        world_id: 'f770f340-32d9-43b7-8481-90d7599e8459',
        category: 'Town',
        map_id: null,
        latitude: null,
        longitude: null,
        name: 'Enorius',
        description: 'Smallest of the towns that are part of the kingdom but second largest in size when landmass is concerned. They supply almost all of the food for the whole kingdom and leftovers are sent to other neighboring towns. The town has a large variety of crops from vegetables to grains. This was the last expansion as more farm land was needed to supply the Kingdom with food. The lands were very rich and perfect for farming and has for many years been very lucrative.\n\
        The town has a single tavern and a general goods store which is mostly equipped for farming goods but some basic exploring gear can be purchased there.',
        population: 300,
        government: 'Duke from royal family',
        commerce: 'Farming',
        defences: 'Small brigade of main army'
      },
    ], {}).then(() => {
      queryInterface.bulkInsert('marker_maps', [
        {
          id: uuid(),
          url: 'https://i.redd.it/5t9oottzvgdy.jpg',
          marker_id: '1ecc79d9-dd03-44f5-a2b2-08689c553342',
          world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
          height: 653,
          width: 851
        }
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('marker_maps', null, {})

    return queryInterface.bulkDelete('markers', null, {})
  }
};

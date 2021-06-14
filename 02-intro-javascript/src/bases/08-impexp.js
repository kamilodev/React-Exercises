//import { heroes } from './data/heroes'

import { heroes } from '../data/heroes'
// import owners from '../data/heroes'
//console.log(heroes)
// console.log(owners)

const getHeroById = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroById(2))

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner('DC'))

export { getHeroById, getHeroesByOwner }

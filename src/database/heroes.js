let heroes= require("./heroes.json")

const getAllHeroes= ()=> {
    return heroes
}

const getOneHeroe= (id)=>  {
    const heroe= heroes.filter(hero=> hero.id === id)
    return heroe
}

const postNewHero=  (newHero)=> {
    heroes= [...heroes, newHero ]
    return newHero
}

const deleteHero=(id)=>{
    heroes = heroes.filter(hero => hero.id !== id)
    return "erased"
}

const updateHero= (info, id)=> {
    const indexHero = heroes.findIndex(hero => hero.id === id);
    const updatedHero={...heroes[indexHero], ...info }
    heroes[indexHero]= updatedHero
    return updatedHero
}

module.exports = { 
    getAllHeroes,
    getOneHeroe,
    postNewHero,
    deleteHero,
    updateHero }
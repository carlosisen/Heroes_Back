let heroes= require("./heroes.json")

const getAllHeroes= ()=> {
    return heroes
}

const searchHeroe= (search)=>  {
    search= search.toString().toLowerCase()
    const heroe= heroes.filter(
            hero=> 
                hero.name.toLowerCase().includes(search)||
                hero.alter_ego.toLowerCase().includes(search)||
                hero.characters.toLowerCase().includes(search)
            )
    if (!heroe.length){
        return "Sorry, no matches"}
    return heroe
}

const getOneHeroe= (id)=>{
    const oneHero= heroes.filter(hero=> hero.id= id)
    return oneHero
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
    searchHeroe,
    getOneHeroe,
    postNewHero,
    deleteHero,
    updateHero }
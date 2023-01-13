let heroes= require("./heroes.json")

const getAllHeroes= ()=> {
    return heroes
}

const getOneHeroe= (search)=>  {
    const heroe= heroes.filter(
            hero=> 
                hero.name.toLowerCase().includes(search.toLowerCase())||
                hero.alter_ego.toLowerCase().includes(search.toLowerCase())||
                hero.characters.toLowerCase().includes(search.toLowerCase())
            )
    if (!heroe.length){
        return "no coincidencies"}
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
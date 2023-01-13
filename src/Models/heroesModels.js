const database= require("../database/heroes.js")



const getAllHeroes = ()=>{
    const heroes= database.getAllHeroes()
    return heroes
};
const getOneHeroe = (id)=>{
    const oneHeroe= database.getOneHeroe(id)
    return oneHeroe
};
const postNewHero = (newHero)=>{
    const heroes = database.getAllHeroes()
    newID= heroes.map(hero=> hero.id).sort((a,b)=> a- b).pop() + 1
    newHero= {id: newID, ...newHero}
    const createdHeroe= database.postNewHero(newHero)
    return createdHeroe

};
const deleteHero = (id)=>{
    const deletedHero= database.deleteHero(id)
    return deletedHero
}

const updateHero= (changes, id) => {
    const updatedHero= database.updateHero(changes, id)
    return updatedHero
}

module.exports= {
    getAllHeroes,
    getOneHeroe,
    postNewHero,
    deleteHero,
    updateHero
}
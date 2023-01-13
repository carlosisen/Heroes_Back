const heroesService= require("../Models/heroesModels.js")


const getAllHeroes= (req,res)=> {
    const allHeroes= heroesService.getAllHeroes()
    res.status(200).json({data: allHeroes})
}

const getOneHeroe= (req, res) => {
    const existHero = heroesService.getAllHeroes().some(heroe => heroe.id === parseInt(req.params.id))
    if(!existHero){
        return res.status(404).json("Id not Found")
    }

    const oneHeroe= heroesService.getOneHeroe(parseInt(req.params.id))
    res.status(200).json(oneHeroe)
}

const createNewHeroe= (req, res)=> {
    const { name, publisher, alter_ego, image, characters, first_appearance }= req.body;
    if( !name || name=== " ") {
        return res.status(404).json("a valid name is required") // importante el return para que corte la funcion. 
    }
    const newHero={
        name,
        publisher,
        alter_ego,
        image,
        characters,
        first_appearance 
    }

    const createdHeroe= heroesService.postNewHero(newHero)
    res.status(201).json({data: createdHeroe})  //aquí no hace falta el return.
} 

const deleteHeroe= (req, res)=> {
    const existHero = heroesService.getAllHeroes().some(heroe => heroe.id === parseInt(req.params.id))
    if (!existHero) {
        return res.status(404).json("Id not Found")
    }
    const deletedHero= heroesService.deleteHero(parseInt(req.params.id))
    res.status(204).end() //sino devuelvo algo además del status postman se queda esperando, asi finaliza.
}

const updateHero=(req,res)=> {
    const existHero = heroesService.getOneHeroe(parseInt(req.params.id))
    const info= req.body 
    if (existHero.length=== 0) {
        return res.status(404).json("hero not Found")
    }
    else if (!(info.name || info.publisher || info.alter_ego || info.characters || info.image)){
        return res.status(404).json("data not recived")
    }
    const updatedHero= heroesService.updateHero(info, existHero[0].id)
    res.status(202).json({data: updatedHero})
}

module.exports= {
    getAllHeroes,
    getOneHeroe,
    createNewHeroe,
    deleteHeroe,
    updateHero,
}
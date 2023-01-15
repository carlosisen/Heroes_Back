const heroesModels= require("../Models/heroesModels.js")


const getAllHeroes= (req,res)=> {
    const allHeroes= heroesModels.getAllHeroes()
    res.status(200).json({data: allHeroes})
}

const searchHeroe= (req, res) => {
    const oneHeroe= heroesModels.searchHeroe(req.params.search)
    res.status(200).json(oneHeroe)
}

const createNewHeroe= (req, res)=> {
    const { name, publisher, alter_ego, image, characters, first_appearance }= req.body;
    if( !name || name=== " ") {
        return res.status(400).json("a valid name is required") // importante el return para que corte la funcion. 
    }
    const newHero={
        name,
        publisher,
        alter_ego,
        image,
        characters,
        first_appearance 
    }

    const createdHeroe= heroesModels.postNewHero(newHero)
    res.status(201).json({data: createdHeroe})
} 

const deleteHeroe= (req, res)=> {
    const existHero = heroesModels.getAllHeroes().some(heroe => heroe.id === parseInt(req.params.id))
    if (!existHero) {
        return res.status(404).json("Id not Found")
    }
    heroesModels.deleteHero(parseInt(req.params.id))
    res.status(204).end()
}

const updateHero=(req,res)=> {
    const existHero = heroesModels.getOneHeroe(parseInt(req.params.id))
    const info= req.body 
    if (existHero.length=== 0) {
        return res.status(404).json("hero not Found")
    }
    else if (!(info.name || info.publisher || info.alter_ego || info.characters || info.image)){
        return res.status(400).json("data not recived")
    }
    const updatedHero= heroesModels.updateHero(info, existHero[0].id)
    res.status(202).json({data: updatedHero})
}

module.exports= {
    getAllHeroes,
    searchHeroe,
    createNewHeroe,
    deleteHeroe,
    updateHero,
}
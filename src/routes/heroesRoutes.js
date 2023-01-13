const express = require("express")
const router= express.Router()
const heroesController= require("../controllers/heroesController")

router
    .get("/", heroesController.getAllHeroes)
    .get("/:id", heroesController.getOneHeroe)
    .patch("/:id", heroesController.updateHero)
    .post("/", heroesController.createNewHeroe)
    .delete("/:id", heroesController.deleteHeroe)

        
module.exports = router;
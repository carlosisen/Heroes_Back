const express= require("express")
const router= require("./routes/heroesRoutes.js")
const cors = require("cors");
const app= express()
const PORT = 3005

app.use(express.json())
app.use(cors({
        origin: "*",
}
));
app.use("/heroes", router )



app.listen(PORT,    
    ()=> {console.log(`server in port ${PORT}` )})
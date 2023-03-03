const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static("public"))
app.set('view engine' , 'ejs')

app.use(bodyParser.urlencoded({extended: true}))




app.get("/",(req,res)=>{
    n1 = "chay"
    res.render("lists",{name:n1})
})


app.listen(process.env.PORT || 2255, ()=>{
    console.log("SERVER RUNNING AT PORT 2255");
})
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
var NEWITEMS = ["Complete Work Fast", "Eat Less Food", "Exercise Daily"]

app.use(express.static("public"))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))




app.get("/", (req, res) => {

    res.render("lists", { name: NEWITEMS, heading: "TO-DO LIST" })    ///accessing the var data which is at top of the app bcoz render method accepts only in the route data.
})


app.post("/", (req, res) => {
      
    var NEWITEM = req.body.newItem               //getting post request data
    NEWITEMS.push(NEWITEM)                //sending post data to var at top of app
    res.redirect("/")               //redirecting to homepage after post request sent
})

app.listen(process.env.PORT || 2255, () => {
    console.log("SERVER RUNNING AT PORT 2255");
})
const express = require('express')
const app = new express()
const randomColorID = Math.floor(Math.random()*6)

app.use(express.static("public"))

app.get('/hello', (request,response) => {
    response.send("My new message")
    console.log(request.ip)
})

app.get('/guess', (req,res) => {
    const {colorID} = req.query //pull colorID out of object
    console.log(req.query.fullName)
    if (colorID == randomColorID)
        res.send("YOU'RE RIGHT!")
    else
        res.send("YOU'RE WRONG!")
})

app.get('/movies', (request, response) => {
    const movie = {
        name: "Ace Ventura Pet Detective",
        rating: 10
    }
    response.send(movie)
})

app.listen(3000, () => {
    console.log("server started")
})
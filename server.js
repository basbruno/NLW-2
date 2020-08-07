const proffys = [
    {
        name: "Diego Fernandes",
        avatar:"",










        whatsapp:"",
        subject:"",
        cost:"",
        weekday:"",
        time_from:"",
        time_to:""}



]

const express = require('express')()

const server = express()

server.use(express.static("public"))
    .get("/", (req, res) => {

        return res.sendFile(_dirname + "/views/index.html")
    })

    .get("/study", (req, res) => {

        return res.sendFile(_dirname + "/views/study.html")
    })

    .get("/give-classes", (req, res) => {

        return res.sendFile(_dirname + "/views/give-classes.html")
    })
    .listen(5000)

require('express')()
.get("/",(req,res) => {

    return res.send("Hi From NLW")
})

.get("/study")
.listen(5000)

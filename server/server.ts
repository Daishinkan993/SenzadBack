const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.post("/user/signin", (req, res) => {
    console.log(req.body.data)
})

app.post("/user/authorize", (req, res) => {
    res.json({id: 1, name: "lal", email: req.body.email})
})

app.listen(port, () => {
    console.log(`Серверная успешно прослушивается ${port}`)
})
const express = require('express')
const cors  = require('cors')

const port = process.env.PORT || 3009
const msgData = require('./data.json')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {res.send("ok")})

app.get('/messages', (req, res) => {
    // console.log(msgData)
    res.json(msgData)
})

app.post('/messages', (req, res) => {
    console.log(req.body)
    try {   
        const data = {user: req.body.user, message: req.body.message}
        msgData.push(data)
    } catch (e) {console.log(e)}
    res.json(msgData)
})


app.listen(port, () => {`listening on port ${port}`})
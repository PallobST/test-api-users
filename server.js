const express = require('express');
const cors = require('cors');
const data = require('./data/users.json')

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/users', (req, res)=>{
    try {
        res.status(200).json(data)
    } catch (error) {
        res.json(error.message)
    }
})

app.listen(PORT, ()=>{
    console.log(`Users App is listening on ${PORT}`)
})
const express = require('express');
const app = express();
const port = 5000;
const chefs = require('./data/chefs.json');
const recipies = require('./data/recipies.json');
const cors = require('cors')

app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is running..')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

// Single Chef
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefs.chefs.find(chef => chef.id == id);
    res.send(singleChef);
})
app.get('/recipies', (req, res) => {
    res.send(recipies);
})
app.listen(port, () => {
    console.log('Server is running on the port ',port)
})


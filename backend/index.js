const express = require('express')
const app = express()
const cors = require('cors')

let users= [];

app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(express.json())




app.post(`/register`, async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).send(`Bad request: missing username, email or password`);
        return;
    }
    try {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        users.push(user)
        console.log(users)
        res.status(201).send({status: `user succesfully saved with username ${req.body.username}`})
        return;
    } catch (error) {
        console.log(error)
        res.status(500).send(`An error has occured`);
    }
});
app.post(`/login`, async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send(`Bad request: missing email or password`);
        return;
    }
    try {
        const found = users.find(element => element.password == req.body.password);
        console.log(found)
        res.status(201).send({status: `user succesfully logged in as : ${found.password}`})
        return;
    } catch (error) {
        console.log(error)
        res.status(500).send(`An error has occured`);
    }
    
});
app.listen(3000);
console.log("app running at http://localhost:3000");
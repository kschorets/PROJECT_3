const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.port || 4000;

const users = { 'user1': 'password1', 'user2': 'password2','1':'1' };


app.use(express.static(__dirname + "/www"));

app.post('/login', (req, res) => {
    // get username from the client form data
    const username = req.body.username;
    const password = users[username];
    if (password === req.body.password) {
        jwt.sign({ username: username }, 'secretkey', (err, token) => {
          res.status(200).json(token);;
        })
    }
    else {
        res.sendStatus(401);
    }
})
//JWT Authentication
function isAuthenticated(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'secretkey', (err, authData) => {
            if (err)
                res.sendStatus(403);
            else if (users[authData?.username])
                next();
            else
                res.sendStatus(403);
        });
    } else {
        res.sendStatus(403);
    }
}
app.get('/api/data', isAuthenticated, function (req, res) {
    var data = [{ name: 'Nick', age: 21 }, { name: 'Maria', age: 22 }];
    res.status(200).send(JSON.stringify(data));
})
app.listen(port, function () {
    console.log("Server listening at port " + port)
});
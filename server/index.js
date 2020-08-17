require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;



app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnathorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err));



app.listen(SERVER_PORT, () => console.log(`Hey Hey, Your Server Works Today ${SERVER_PORT}`));
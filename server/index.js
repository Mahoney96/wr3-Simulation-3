require('dotenv').config();
const express = require('express');
const session = require('massive');
const massive = require('massive');

const app = express();


const PORT = 3993;

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnathorized: false
    }
}).then((dbInstance => {
    app.set('db', dbinstance);
});



app.use(express.json());

app.listen(PORT, () => console.log(`Hey Hey, Your Server Works Today ${PORT}`));
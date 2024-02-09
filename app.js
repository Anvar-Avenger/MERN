const express = require('express');
const cfg = require('config');
const cors = require('cors');
const mongoose = require('mongoose')


const app = express()

function setup() {
    app.use(cors());
    app.use(express.json()); // {extends: false/true}

    app.get('/', function (req, res) {
        return res.send('Bosh sahifa');
    });
    app.use('/', require('./routes/auth'));
    app.use('/links', require('./routes/link'));
}

async function start() {
    setup();
    try {
        let PORT = cfg.get('port') || 5500;
        await mongoose.connect(cfg.get('database'));
        app.listen(PORT);
        console.log("Bazaga ulandi. Port: " + PORT);
    } catch (e) {
        console.log("Xatolik: ", e.message)
        process.exit(1)  // ilovani yakunlash
    }
}

start()

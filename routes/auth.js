const express = require('express')
let router = express.Router()
let {login, register} = require('../controllers/AuthController')
let {check, validationResult} = require('express-validator')

router.post('/login', (req, res) => {
    return login(req, res);
});

router.post('/register', [ // validator
    check('email', "Noto\u2018g\u2018ri foydalanuvchi nomi").isEmail(),
    check('password', "Kamida 6 ta belgidan iborat bo\u2018lishi kerak")
        .isLength({min: 6})
], (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            msg: "Ro\u2018yxatdan o\u2018tish uchun noto\u2018g\u2018ri ma\u2019lumot taqdim etilgan"
        });
    }

    return register(req, res);
});

module.exports = router;
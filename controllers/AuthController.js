const cfg = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator');

let User = require('../models/User')


async function login(req, res) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.errors,
            msg: "Tizimga kirishda noto\u2018g\u2018ri ma\u2019lumotlar taqdim etilgan"
        });
    }

    let {email, password} = req.body
    let user = await User.findOne({email})
    if (!user) {
        return res.status(401).json({
            success: false,
            msg: "Bunday foydalanuvchi mavjud emas"
        });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            success: false,
            msg: "Yashirin so\u2018z noto\u2018g\u2018ri kiritilgan. Qaytadan urunib ko\u2018ring"
        });
    }

    let token = jwt.sign(
        {user_id: user.id},
        cfg.get('jwt_secret'), // yashirin so'z
        {expiresIn: '1h'} // 1 soat
    );

    return res.json({
        success: true,
        msg: "Muvaffaqiyatli ro\u2018yxatdan o\u2018tdi",
        token: token,
        user_id: user.id
    })
}

async function register(req, res) {
    try {
        let {email, password} = req.body;
        let candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({
                msg: "Bunday foydalanuvchi allaqachon mavjud"
            });
        }

        let hashed_pass = await bcrypt.hash(password, 12);
        let user = new User({email, password: hashed_pass});
        await user.save();

        return res.status(201).json({
            success: true,
            msg: "Ma\u2019lumotlar ro\u2018yxatdan o\u2018tirildi. Yangi foydalanuvchi yaratildi"
        });
    } catch (e) {
        return res.status(500).json({
            msg: "Qandaydir xatolik yuz berdi. Qaydatan urunib ko\u2018ring"
        })
    }
}

module.exports = {login, register};
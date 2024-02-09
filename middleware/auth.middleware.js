const jwt = require('jsonwebtoken');
const cfg = require('config');


module.exports = (req, res, next) => {
    if (req.method === "OPTION")
        return next()

    try {
        let authHeader = req.headers.authorization;
        let token = authHeader.split(' ')[1] // Bearer token
        if (!token)
            return res.status(401).json({
                msg: "Tizim tomonidan tanilmadi!"
            });

        req.user = jwt.verify(token, cfg.get('jwt_secret'));
        next()
    } catch (e) {
        return res.status(401).json({
            msg: "Tizim tomonidan tanilmadi!",
            error: e.message
        });
    }
}


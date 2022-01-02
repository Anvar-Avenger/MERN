const {Router} = require('express');
const LinkController = new (require('../controllers/LinkController'));
const router = Router();
const auth = require('../middleware/auth.middleware')

router.get('/', (req, res) => {
    return LinkController.index(req, res);
});

router.post('/', auth, (req, res) => {
    return LinkController.create(req, res)
});

router.get('/:id', (req, res) => {
    return LinkController.show(req, res)
});

router.get('/:id/open', (req, res) => {
    return LinkController.open(req, res);
});

module.exports = router
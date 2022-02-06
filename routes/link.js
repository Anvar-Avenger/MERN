const {Router} = require('express');
const LinkController = new (require('../controllers/LinkController'));
const router = Router();
const auth = require('../middleware/auth.middleware')

router.get('/', (req, res) => {
    return LinkController.index(req, res);
});

router.post('/', auth, LinkController.create);
router.get('/:id', LinkController.show);
router.get('/:id/open', LinkController.open);

module.exports = router
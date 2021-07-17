const router = require('express').Router();
const User = require('../controllers/User');

router.post('/create', User.Create)
router.post('/update', User.Update)
router.post('/delete', User.Delete)
router.post('/find', User.Find)

module.exports = router;
const { Router } = require('express');
const { check } = require('express-validator');

const { loginController } = require('../controllers/auth');

const router = new Router();

//Route GET
router.post('/login', loginController);

module.exports = router;
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {uploadFile} = require('../controllers/uploads');

const router = new Router();

router.post('/', uploadFile);

module.exports = router;  
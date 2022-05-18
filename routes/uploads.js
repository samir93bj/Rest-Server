const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {allowedColecction} = require('../helpers/db-validators');

const {uploadFile, uploadFilePut} = require('../controllers/uploads');

const { validarArchivoSubir } = require('../middlewares/validarArchivo');


const router = new Router();

router.post('/', 
validarArchivoSubir,
    uploadFile);

router.put('/:collection/:id',[
    validarArchivoSubir,
    check('id','El id ingresado no es correcto').isMongoId(),
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('collection').custom(c => allowedColecction(c, ['users','products'])),
    validarCampos
    ],
    uploadFilePut);

module.exports = router;  
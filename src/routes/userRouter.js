const controller = require('../controllers/userController');
const uploadFile = require('../middlewares/multer');

const { Router } = require('express');
const router = Router();

router.get('/', controller.home);
router.post('/create/newMovie', uploadFile.single('img'), controller.create);
router.get('/editar/pelicula/:id', controller.newMovie);


module.exports = router;

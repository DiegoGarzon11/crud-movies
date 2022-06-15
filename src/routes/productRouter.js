const controller = require('../controllers/productController');
const uploadFile = require('../middlewares/multerAdd');

const { Router } = require('express');
const router = Router();

router.get('/', controller.home);
/* add a new movie. */
router.post('/create/newMovie', uploadFile.single('img'), controller.add);

/* A route that is used to get the new movie page. */
router.get('/:id/editar', controller.newMovie);
/* Updating the movie. */
router.put('/:id/editar',  uploadFile.single('newImg'),controller.update);
/* Deleting the movie. */
router.delete('/:id/delete', controller.delete);







module.exports = router;

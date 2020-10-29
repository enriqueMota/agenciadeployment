import express from 'express';
import {
     
     pagina_inicio, 
     pagina_nosotros, 
     pagina_viajes, 
     pagina_testimoniales, 
     pagina_detalle_viaje

} from '../controllers/paginascontroller.js';

import {
     guardar_testimonial
} from '../controllers/testimonialcontroller.js'

const router = express.Router();


router.get('/', pagina_inicio);

router.get('/nosotros', pagina_nosotros);

router.get('/viajes', pagina_viajes);

// like django url, se le puede mandar una variable a un enlace
router.get('/viajes/:slug', pagina_detalle_viaje);

router.get('/testimoniales', pagina_testimoniales);
router.post('/testimoniales', guardar_testimonial);

export default router;

import { Viaje } from '../models/Viajes.js'
import { Testimonial } from '../models/Testimoniales.js'

const pagina_inicio = async (request, response) => {
     
     
     const promiseDB = []

     promiseDB.push(Viaje.findAll({ limit: 3}))
     promiseDB.push(Testimonial.findAll({ limit: 3}))

     try {          
          
          const resultado = await Promise.all( promiseDB );


          response.render('inicio', {
               pagina: 'Inicio',
               clase: 'home',
               viajes: resultado[0],
               testimoniales: resultado[1]
          });
     } catch (error) {
          console.log(error);
     }
};

const pagina_nosotros = (request, response) => {
     response.render('nosotros', {
          pagina: 'Nosotros'
     });
};

const pagina_viajes = async (request, response) => {

     // consultar db
     // logging:console.log;
     const viajes = await Viaje.findAll();
     console.log(viajes);

     response.render('viajes', {
          pagina: 'Próximos viajes',
          viajes, // object literal enhancement: en vez de pasar una variable y un valor que se llamen igual, se puede poner una sola vez
     });
};

const pagina_testimoniales = async (request, response) => {
     try {
          const testimoniales = await Testimonial.findAll();
          response.render('testimoniales', {
               pagina: 'Testimoniales',
               testimoniales
          });
     } catch (error) {
          console.log(error);
     }
};

const pagina_detalle_viaje = async (request, response) => {
     // response.render('testimoniales',{
     //      pagina: 'Testimoniales'
     // });
     const { slug } = request.params;

     
     try {
          const viaje = await Viaje.findOne({ where: { slug } });
          response.render('viaje', {
               pagina: 'Información Viaje',
               viaje
          });
     } catch (error) {
          console.log(error);
     }



};

export {
     pagina_inicio,
     pagina_nosotros,
     pagina_viajes,
     pagina_testimoniales,
     pagina_detalle_viaje
}
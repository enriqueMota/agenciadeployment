import { Testimonial } from '../models/Testimoniales.js'

const guardar_testimonial = async (req, res) => {

     const { nombre, correo, mensaje } = req.body;

     const errores = [];

     if(nombre.trim() === ''){
          errores.push({mensaje: 'El nombre está vacío'})
     }
     if (correo.trim() === ''){
          errores.push({mensaje: 'El correo está vacío'})
     }
     if (mensaje.trim() === ''){
          errores.push({mensaje: 'El mensaje está vacío'})
     }
     

     // { nombre: 'Abel', correo: 'jljl@hh.com', mensaje: 'fsfsdf' }

     if(errores.length  > 0){
          // consulta a la db
          const testimoniales = await Testimonial.findAll();
          res.render('testimoniales', {
               pagina: 'Testimoniales',
               errores,
               nombre,
               correo,
               mensaje,
               testimoniales
          })
     }else {
          // Almacenar en la base de datos

          try {
               await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
               });
               res.redirect('/testimoniales');
          } catch (error) {
               console.log(error)
          }

     }

}

export {
     guardar_testimonial
}
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

// para conectar con la base de datos se crea una nueva instancia de sequelize con el nombre de la base de datos, el user y la contrase;a
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
     host: process.env.BD_HOST,
     port: process.env.BD_PORT,
     dialect: 'mysql',
     define: {
          timestamps: false
     },
     logging: console.log,
     pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
     },
     operatorAliases: false
});

export default db;
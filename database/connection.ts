import { Sequelize } from "sequelize";

// Sequelize('nombre_basededatos', 'nombre_usuario', 'contraseña') //
const db = new Sequelize('prueba-node', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
    // define: {
    //     timestamps: false
    // }
});

export default db;
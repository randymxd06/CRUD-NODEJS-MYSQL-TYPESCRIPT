"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Sequelize('nombre_basededatos', 'nombre_usuario', 'contraseña') //
const db = new sequelize_1.Sequelize('prueba-node', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
    // define: {
    //     timestamps: false
    // }
});
exports.default = db;
//# sourceMappingURL=connection.js.map
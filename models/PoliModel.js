const koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const PoliModel = koneksi.define("poli", {
    id_poli: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_poli: {
        type: Sequelize.STRING,
    },
});
module.exports = PoliModel;
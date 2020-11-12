const koneksi = require("../koneksi");
const Sequelize = require("sequelize");
const PendaftaranModel = koneksi.define("pendaftaran", {
    id_daftar: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    no_antrian: {
        type: Sequelize.INTEGER,
    },
    norm: {
        type: Sequelize.STRING,
    },
    nama: {
        type: Sequelize.STRING,
    },
    poli: {
        type: Sequelize.INTEGER,
    },
});
module.exports = PendaftaranModel;
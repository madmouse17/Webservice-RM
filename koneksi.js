const Sequelize = require("sequelize");
const koneksi = new Sequelize(
    "rekam_medis", //nama database
    "root", //user database
    "", //password database
    {
        host: "localhost", //HOST atau IP database
        dialect: "mariadb", //database engine
        dialectOptions: {
            useUTC: false, //tidak menggunakan format tgl UTC
            dateStrings: true,
            typeCast: true,
        },
        timezone: "+07:00", //set TimeZone
    }
);
koneksi
    .authenticate()
    .then(() => {
        console.log("Berhasil Terhubung Database");
    })
    .catch((err) => {
        console.error("Gagal Terhubung Database: ", err.message);
    });
module.exports = koneksi;
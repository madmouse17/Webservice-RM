var express = require("express");
var router = express.Router();
//PANGGIL PoliModel
var Poli = require("../models/PoliModel.js");
//TAMPIL DATA
router.get("/", function(req, res, next) {
    Poli.findAll()
        .then((hasil) => {
            res.json({
                status: true,
                pesan: "Berhasil Tampil",
                data: hasil,
            });
        })
        .catch((err) => {
            res.json({
                status: false,
                pesan: "Gagal Tampil: " + err.message,
                data: [],
            });
        });
});
module.exports = router;
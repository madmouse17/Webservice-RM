var express = require("express");
var router = express.Router();
//PANGGIL PendaftaranModel
var Pendaftaran = require("../models/PendaftaranModel.js");
//TAMPIL DATA
router.get("/", function(req, res, next) {
    Pendaftaran.findAll()
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
// TAMBAH DATA
router.post("/", function(req, res, next) {
    Pendaftaran.create(req.body)
        .then((hasil) => {
            res.json({
                status: true,
                pesan: "Berhasil Tambah",
                data: hasil,
            });
        })
        .catch((err) => {
            res.json({
                status: false,
                pesan: "Gagal Tambah: " + err.message,
                data: [],
            });
        });
});
//UBAH DATA
router.post("/ubah", function(req, res, next) {
    Pendaftaran.update(req.body, {
            where: { id_daftar: req.body.id_daftar },
        })
        .then(() => {
            res.json({
                status: true,
                pesan: "Berhasil Ubah",
                data: [],
            });
        })
        .catch((err) => {
            res.json({
                status: false,
                pesan: "Gagal Ubah: " + err.message,
                data: [],
            });
        });
});
//HAPUS DATA
router.post("/hapus", function(req, res, next) {
    Pendaftaran.destroy({
            where: { id_daftar: req.body.id_daftar },
        })
        .then(() => {
            res.json({
                status: true,
                pesan: "Berhasil Hapus",
                data: [],
            });
        })
        .catch((err) => {
            res.json({
                status: false,
                pesan: "Gagal Hapus: " + err.message,
                data: [],
            });
        });
});
module.exports = router;
const express = require('express');
const router = express.Router();
const Produtos = require('../table');
const sequelize = require('../db');
const { QueryTypes } = require('sequelize');


router.get('/prod/:codprod', (req, res) =>{
    var qr = req.params.codprod;

    sequelize.query(`SELECT * FROM produtos WHERE codprod = ${qr}`, { type: QueryTypes.SELECT })
    .then(result => {
    var data = result
    res.json({data});
});
});

router.get('/prod', (req, res) =>{
    sequelize.query(`SELECT * FROM produtos`, { type: QueryTypes.SELECT })
    .then(result => {
    var data = result
    res.json(data);
});
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/new', (req, res) => {

    Produtos.create({
        codprod: req.body.codprod,
        descricao: req.body.descricao,
        preco: req.body.preco
    });
});

router.get('/update', (req, res) => {
    res.render('update');
});

router.post('/update', (req, res) => {

    Produtos.update({preco: req.body.preco}, {
        
        where: {
            codprod: req.body.codprod
        }
        
    })

    res.redirect('/new')
});

router.get('/delete', (req, res) => {
    res.render('delete');
});

router.post('/delete', (req, res) => {

    Produtos.destroy({
        where: {
            codprod: req.body.codprod
        }
    });

    res.redirect('/new')
});

module.exports = router;
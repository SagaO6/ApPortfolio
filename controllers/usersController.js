const express = require('express');
const dbConecta = require('../models/dbConnection');
const router = express.Router();

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM users', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.get('/id/:id', (req, res) => {
    const id = req.params.id;
    dbConecta.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

router.post('/', (req, res) => {

    const{home, email, senha} = req.body;
    dbConecta.query('insert into users (nome, email, senha) values (? ,? ,? );', [nome, email, senha ], (err) =>{

        if(err) throw err;
        res.status(201).json({

            mensagem: 'Usuario criado com sucesso';
            body: req.body                                                                                                                                                                                                                                                                                                       

        })

    })

})

module.exports = router;
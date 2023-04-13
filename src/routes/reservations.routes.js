const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>res.status(200).send('GET /reservations succeded'));
router.post('/', (req,res)=>res.status(201).send('POST /reservations succeded'));
router.get('/:id', (req,res)=>res.status(200).send('GET /reservations/:id succeded'));
router.put('/:id', (req,res)=>res.status(200).send('PUT /reservations/:id succeded'));
router.delete('/:id', (req,res)=>res.status(204).send());

module.exports = router;
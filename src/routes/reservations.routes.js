const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reservations.controller');

router.get('/', reservationsController.getAllReservations);
router.post('/', reservationsController.createReservations);
router.get('/:id', reservationsController.getReservation);
router.put('/:id', reservationsController.updateReservation);
router.delete('/:id', reservationsController.deleteReservations);

module.exports = router;
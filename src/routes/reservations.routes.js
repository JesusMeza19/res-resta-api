const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reservations.controller');
const auth= require('../middleware/auth');

router.get('/', auth, reservationsController.getAllReservations);
router.post('/', reservationsController.createReservations);
router.get('/:id', auth, reservationsController.getReservation);
router.put('/:id', auth, reservationsController.updateReservation);
router.delete('/:id', auth, reservationsController.deleteReservations);

module.exports = router;
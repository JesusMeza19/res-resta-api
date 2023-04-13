const mongoose = require('mongoose');

const ReservationsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    people: {type: Number, required: true},
    reservationDate: {type: Date, required: true},
    reservationShedule: {type: Number, required: true}
});

const Reservation = mongoose.model('Reservations', ReservationsSchema);

module.exports= Reservation;
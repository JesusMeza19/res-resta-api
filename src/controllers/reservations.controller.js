const getAllReservations = (req,res)=>res.status(200).send('GET /reservations succeded');

const createReservations = (req,res)=>res.status(201).send('POST /reservations succeded')

const getReservation = (req,res)=>res.status(200).send('GET /reservations/:id succeded');

const updateReservation = (req,res)=>res.status(200).send('PUT /reservations/:id succeded');

const deleteReservations = (req,res)=>res.status(204).send();

module.exports = {deleteReservations, updateReservation, getAllReservations, getReservation, createReservations};
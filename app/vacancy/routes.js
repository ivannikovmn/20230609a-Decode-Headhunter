const express = require('express')
const router = express.Router();
const {getExperiences, getMyVacancies, createVacancy, getVacancy, deleteVacancy, editVacancy, searchVacancy} = require('./contollers')
const passport = require('passport')
const {isManager} = require('../auth/middlewares')
const {validateVacancy, isAuthorVacancy} = require('./middlewares')
router.get('/api/experiences', getExperiences)

router.post('/api/vacancy', passport.authenticate('jwt', { session: false }), isManager, validateVacancy, createVacancy)
router.get('/api/vacancy', passport.authenticate('jwt', { session: false }), isManager, getMyVacancies)
router.get('/api/vacancy/search', searchVacancy)
router.get('/api/vacancy/:id', getVacancy)
router.delete('/api/vacancy/:id', passport.authenticate('jwt', { session: false }), isManager, isAuthorVacancy, deleteVacancy)
router.put('/api/vacancy', passport.authenticate('jwt', { session: false }), isManager, isAuthorVacancy, validateVacancy, editVacancy)

module.exports = router;
const express = require('express')
const router = express.Router();
const {getEmploymentTypes} = require('./contollers')

router.get('/api/employment-types', getEmploymentTypes)

module.exports = router;
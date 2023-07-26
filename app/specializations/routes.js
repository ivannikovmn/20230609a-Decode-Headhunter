const express = require('express')
const router = express.Router();
const {getSpecializations} = require('./contollers')

router.get('/api/specializations', getSpecializations)

module.exports = router;
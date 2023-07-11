const express = require('express')
const router = express.Router();
const {SendVerificationEmail, verifyCode} = require('./contollers')

router.post('/api/auth/sendmail', SendVerificationEmail)
router.post('/api/auth/verifycode', verifyCode)

module.exports = router;
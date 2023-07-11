const express = require('express')
const router = express.Router();
const {getAllSkills, getSkillsByKey} = require('./contollers')

router.get('/api/skills', getAllSkills)
router.get('/api/skills/:key', getSkillsByKey)

module.exports = router;
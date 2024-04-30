const { Router } = require('express');
const router = Router();
const {formSubmitted} = require('./FormController')

router.post('/formSubmitted', formSubmitted)

module.exports = router;
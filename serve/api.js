const express = require('express');
const router = express.Router();

const { info, style } = require('../lib/resume')

const resume = (req, res, next) => {
  res.send({
    info,
    style
  });
}

router.get('/resume', resume);

module.exports = router;
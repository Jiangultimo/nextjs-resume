const express = require('express');
const router = express.Router();

const { info, style } = require('../lib/resume')

const index = (req, res, next) => {
  res.send({
    success: true
  });
};

const resume = (req, res, next) => {
  console.log(res.header())
  res.send({
    info,
    style
  });
}

router.get('/', index);
router.get('/resume', resume);

module.exports = router;
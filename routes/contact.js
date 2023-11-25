var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is not valid'),
    check('message').notEmpty().withMessage('Message is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('contact', { errors: errors.array() });
    } else {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;

      res.render('contact', { showThankYou: true, name, email, message });
    }
  }
);

module.exports = router;

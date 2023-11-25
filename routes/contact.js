const express = require('express');

const router = express.Router();
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
      const { name } = req.body;
      const { email } = req.body;
      const { message } = req.body;

      res.render('contact', {
        showThankYou: true,
        name,
        email,
        message,
      });
    }
  },
);

module.exports = router;

const express = require('express');

const router = express.Router();
const CONSTS = {
  name: 'Ömer Faruk Olcay',
  profession: 'Software Engineer',
  specialization: 'Full Stack Development',
  number_of_projects: '20+',
  contact_method: 'omerfrkolcy@gmail.com',
  github_link: 'https://github.com/omerfrkolcy',
};
const routes = [
  { path: '/', view: 'index', config: { title: 'Welcome' } },
  { path: '/about', view: 'about-me', config: { title: 'About Me' } },
  { path: '/projects', view: 'projects', config: { title: 'Projects' } },
  { path: '/contact', view: 'contact', config: { title: 'Contact Me', showThankYou: false } },
];

routes.forEach((route) => {
  router.get(route.path, (req, res) => {
    res.render(route.view, Object.assign(CONSTS, route.config));
  });
});

module.exports = router;

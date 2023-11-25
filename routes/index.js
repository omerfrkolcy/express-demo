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
  { path: '/', view: 'index', title: 'Welcome' },
  { path: '/about', view: 'about-me', title: 'About Me' },
  { path: '/projects', view: 'projects', title: 'My Projects' },
  { path: '/contact', view: 'contact', title: 'Contact Me' },
];

routes.forEach((route) => {
  router.get(route.path, function (req, res) {
    res.render(route.view, Object.assign(CONSTS, { title: route.title }));
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const data = require('../data.json');
//An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    res.render('index', { data : data.projects })
})

//An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
    res.render('about')
})

// Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project that render a customized version
// of the Pug project template to show off each project. Which means adding data, or "locals", 
// as an object that contains data to be passed to the Pug template.
router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = data.projects.find(project => project.id.toString() === projectId);
    if (!project) {
        const error = new Error('Project not found');
        error.status = 404;
        next(error);
    };
    res.render('project', { project });
})

module.exports = router;
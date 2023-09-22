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

// Dynamic "project" routes based on the id of the project 
router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = data.projects.find(project => project.id.toString() === projectId);

    if (!project) {
        // const err = new Error();
        // err.status = 404;
        // err.message = `Looks like the page requested doesn't exist.`
        // next(err);
        //res.render('project', { project });
        res.status(404).render('page-not-found')
    } else {
        res.render('project', { project });
    }
    
})

module.exports = router;
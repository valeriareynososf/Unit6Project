//import express from 'express';
const express = require('express');
// const data = require('./data');

const app = express();

app.set('view engine', 'pug')

const routes = require('./routes')

app.use(routes);
//use a static route and the express.static method to serve the static files located in the public folder
app.use('static', express.static('public'));

// //An "index" route (/) to render the "Home" page with the locals set to data.projects
// app.get('/', (req, res) => {
//     res.render('index', { data : data.projects })
// })

// //An "about" route (/about) to render the "About" page
// app.get('/about', (req, res) => {
//     res.render('about')
// })

// // Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project that render a customized version
// // of the Pug project template to show off each project. Which means adding data, or "locals", 
// // as an object that contains data to be passed to the Pug template.
// app.get('/project/:id', (req, res, next) => {
//     const projectId = req.params.id;
//     const project = data.projects.find(project => project.id.toString() === projectId);
//     if (!project) {
//         const error = new Error('Project not found');
//         error.status = 404;
//         next(error);
//     };
//     res.render('project', { project });
// })




// app.use()

app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
})

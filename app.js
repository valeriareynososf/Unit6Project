//import express from 'express';
const express = require('express');
// const data = require('./data');
const routes = require('./routes')
const app = express();

app.set('view engine', 'pug')
app.use('/static', express.static('public'));


app.use(routes);
//use a static route and the express.static method to serve the static files located in the public folder


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



//404 Error Handler
app.use((req, res, next) => {
//     const error = new Error('Page Not Found');
//     error.status = 404;
// console.log("hmmmm", error)
//     next(error);
// console.log("there's an error")
res.status(404).render('error')
})

//Global Error Handler
app.use((err, req, res) => {
    err.status = err.status || 500;
    err.message = err.message || 'Internal Server Error';
    console.log(`${err.status} - ${err.message}`)
    res.status(err.status).render('error', { err })
})


app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
})

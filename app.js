const express = require('express');
const routes = require('./routes')
const app = express();

app.set('view engine', 'pug')
app.use('/static', express.static('public'));

app.use(routes);


//404 Error Handler
app.use((req, res, next) => {
    console.log(`Error Status - 404. Oops! The page you're looking for does not exist.`);

    res.status(404).render('page-not-found')
})

//Global Error Handler
app.use((err, req, res) => {
    if (err) {
        console.log(`${err.status} - ${err.message}`)
      }
    if (err.status === 404) {
        res.status(404).render('page-not-found', { err })
    } else {
        err.message = err.message || 'Internal Server Error';
        res.status(err.status || 500).render('error', { err })
    }
   
})


app.listen(3000, () => {
    console.log("The application is running on localhost:3000")
})

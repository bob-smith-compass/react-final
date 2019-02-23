const express = require('express')
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const port = 9090;

app.use(morgan('combined'));
// app.use(morgan('tiny'));

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.render(path.join(__dirname, 'public/index')); // Error: No default engine was specified and no extension was provided.
    res.sendFile(path.join(__dirname, 'index.html')); 

});
app.get('/about', (req, res) => {
    res.sendFile(__dirname, about.html);
})

app.listen(port, () => {
    // console.log(`Example app listening on port ${chalk.green(port)}!`)
    /**
     * DEBUG=* node server.js 
     */
    debug(`Example app listening on port ${chalk.green(port)}!`); 
})
const express = require('express')
const path = require('path');
const app = express()
const port = 9090

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render(path.join(__dirname, 'public/index'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
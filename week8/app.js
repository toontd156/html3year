const express = require('express');
const path = require('path');
const app = express();

//root
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/now', (req, res) => {
    res.send(new Date().toLocaleString());
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

//start
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})
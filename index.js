
const express = require('express');
const app = express();


app.get('/get', (req, res) => {
    res.send("<==== HELLO BISHAL ==>")
});

app.get('/set', (req, res) => {
    res.send("<==== HELLO DARSHAN ==>")
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

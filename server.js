const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.urlencoded({ extended: false }));

app.post('/mbti', (req, res) => {
    console.log(req.body);
    let result = req.body;
    let mbti = '';
    if (result.q1 === 'E') {
        mbti += 'E';
    } else {
        mbti += 'I';
    }

    res.send(`<h1>Your MBTI Type is ${mbti}.</h1>`)
});
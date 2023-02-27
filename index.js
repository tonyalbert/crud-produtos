const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', routes);



app.listen(7070, () => {
    console.log('on')
});


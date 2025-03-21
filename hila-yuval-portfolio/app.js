const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup - corrected syntax
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Basic route for testing
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Hila Yuval Casting'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

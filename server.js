// request to front end for data
const { data } = require('./data/db.json')
// setting up express
const express = require('express');

const app = express();

//const PORT = process.env.PORT || 3001;


//app.use(express.static('public'));

// add the route
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Server to listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

//app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
//server.js

const express = require('express'); 
const bodyParser = require("body-parser");
const cors = require("cors");

const data = require("./app/data/restaurant.json");

const menu = require("./app/data/single.json");
//const extraRestaurant = require("./app/data/extra.json");
const app = express(); 

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse rquest of content type: json
app.use(bodyParser.json());

// parse rquest of content type: x-www-form
app.use(bodyParser.urlencoded({extended:true}));


// database not yet implement
// const db = require("./app/models");
// db.sequelize.sync({ force: true}).then(() => {
//     console.log("Drop and re-syncsdb.");
// });
 
  
// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => { 
    res.json({ message:  
            'Hello Singh server message is coming!' }); 
}); 

app.get('/api/restaurants', function(req,res){
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})

app.get('/api/menu', function(req, res){
    res.header("Content-Type","application/json");
    res.send(JSON.stringify(menu));
})

app.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
});

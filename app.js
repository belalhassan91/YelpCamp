const express = require('express');
const ejs     = require('ejs'); 
const app     = express();
const port    = 3000;
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
//Connect Mongoose
mongoose.connect('mongodb://localhost:27017/yelpcamp', {useNewUrlParser: true, useUnifiedTopology: true});

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

var Campground  = mongoose.model("Campground",campgroundSchema);

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// '/' page
app.get('/', (req, res) => res.render('index'))

// '/campgrounds' page
app.get('/campgrounds', (req,res)=>{
    //get all campgrounds from database
    Campground.find({},function (err,campgrounds) {
        if (err){
            console.log("We can't get data from database");
            console.log(err);
        }else {
            res.render('campground',{campgrounds:campgrounds})
        }
    })
})
// '/camgrounds' Post Request
app.post('/campgrounds',(req,res)=>{
    //res.send("you het the post request");
    //get data from form and add to campground array
    console.log(req.body);
    var name = req.body.name;
    var image= req.body.image;
    var campground = {
        name:name,
        image:image
    }
    //update database "campgrounds" with new value
    Campground.create(campground,function (err,camp) {
        if(err){
            console.log("Can't insert new data");
            console.log(err);
        }else {
            console.log(camp)
        }
    });
    //redirect back to campgrounds page
    res.redirect('/campgrounds');
})

// 'campgrounds/new' this get contain form view that send post request to
app.get('/campgrounds/new',(req,res)=>{
    res.render("new"); 
})

// Initialise app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
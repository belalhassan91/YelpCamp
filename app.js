const express = require('express');
const ejs     = require('ejs'); 
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

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

var campgrounds = [
    {
    name:"Test1",
    imgUrl:"https://www.photosforclass.com/download/pixabay-2650359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c722a7ad7964ec159_960.jpg&user=piviso"
},
{
    name:"Test2",
    imgUrl:"https://www.photosforclass.com/download/pixabay-4363073?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c722a7bdd9648c050_960.png&user=bowl_of_nicole"
},
{
    name:"Test3",
    imgUrl:"https://www.photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c722a7ad7964ec159_960.jpg&user=Pexels"
},
{
    name:"Test1",
    imgUrl:"https://www.photosforclass.com/download/pixabay-2650359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c722a7ad7964ec159_960.jpg&user=piviso"
},
{
    name:"Test2",
    imgUrl:"https://www.photosforclass.com/download/pixabay-4363073?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c722a7bdd9648c050_960.png&user=bowl_of_nicole"
},
{
    name:"Test3",
    imgUrl:"https://www.photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c722a7ad7964ec159_960.jpg&user=Pexels"
}]

// '/' page
app.get('/', (req, res) => res.render('index'))

// '/campgrounds' page
app.get('/campgrounds', (req,res)=>{
    res.render('campground',{campgrounds:campgrounds})
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
        imgUrl:image
    }
    //update global array "campgrounds" with new value
    campgrounds.push(campground);
    //redirect back to campgrounds page
    res.redirect('/campgrounds');
})
// 'campgrounds/new' this get contain form view that send post request to 
app.get('/campgrounds/new',(req,res)=>{
    res.render("new"); 
})
// Initialise app 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
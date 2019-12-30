Yelpcamp
========
* Adding Landing Page
* Add Campground Pages that list all campground

Each Campground has
===================
* Name
* Image

Layout and basic styling
=========================
* Add header and footer partials
* add in Bootstrap

Creation New Campground
========================
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic un styled form

Style the campgrounds page
============================
* Add a better header/title
* Make campgrounds display in grid

Add Mongoose
==================
* Install and Configure Mongoose
* Setup campground model
* Use campground model inside of our routes!

Show Page
==========
* Review the RESTful routes we've seen so far
* Add description to our campground model 
* Show db.collection.drop()
* Add show route/template

RESTFUL Route
==================
|Name   |URL             |verb   | Description                         |
|:----- |:----------------|:-------|:----------------------------------|
|INDEX |/campgrounds    |GET    |Display a list of all campground      |
|NEW   |/campgrounds/new|GET    |Display form to make a new campground |
|CREATE|/campgrounds    |POST   |Parse post request and update database|
|SHOW  |/campground/:id  |GET    |Show info about one dog               | 
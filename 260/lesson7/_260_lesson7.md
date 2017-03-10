Lesson 7: Build a Music Store
============================

# 1	Introduction



# 2	Server Development and Static Music Collection

Set up the Express application.
- From the root directory of your project, run express .
- Ensure you have Nodemon installed globally, modify the package.json start command to use Nodemon.
- Install the Stylus module and use the Express connect middleware in app.js to use it.

Set up Bower and Grunt
- Install your Grunt plugins as dev dependencies: grunt-bower-concat, grunt-contrib-uglify
- Install your Bower dependencies: jQuery, Backbone (Underscore will be included as a dependency), Handlebars
- Create some placeholder albums JSON data.
- Obtain some sample data from iTunes (http://www.apple.com/itunes/charts/albums/)
- Add an albums.json file to to the /data directory using data obtained from the previous step - here is an example.
- For each album, your data set should include these properties: title, artist, date, cover, id, price

Create an index route.
- Use the path and fs modules built-in to Node to read in albums from the JSON file.
- To obtain the current root directory of your server, use path.resolve(path.dirname(__dirname))
- Modify the get "/" route by passing the albums JSON as data to be used by the Pug view.
- Remove the users route file and the corresponding require statement from app.js. You will also need to remove the app.use statement that includes it.

Create an index Pug view.
- Create a basic Pug layout.
- Include the mixins from our previous project to make JavaScript and Stylesheet includes easier.
- Iterate over the albums JSON and output a list of albums with all data rendered.
- Add an "add to cart" link to each album to be used later.

Create some basic Stylus styles.
- Style the albums to be listed 5 per row.
- Style the "add to cart" link to look more like a button.
- Move the cart link styles to a mixin in a separate file, then use an @import directive to include it.
- Move any CSS colors to a colors object in the mixins file, then change color references to object properties on the colors object.

# 3	New Album Route and Form



# 4	Album Node Module



# 5	Beginning Backbone Development



# 6	Convert New Album View to Backbone Page



# 7	Adding a Cart



# 8	Store and Retrieve Cart Data with localStorage



# 9	Summary



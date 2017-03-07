Lesson 5: Creating a Single Page Application
==========================================

# 1	Code Organization for Backbone Apps

```
project
  |--package.json 
  |--gruntfile.js 
  |--bower.json 
  |--server.js (for http server)
  |--spec includes x.spec.js
  |--public
      |--index.html
      |--stylesheets
      |--javascripts
            |--vendor
            |--models
            |--collections
            |--views
            |--app.js
          
```


# 2	Project Introduction: Music Albums
# 3	Project: Creating a Node API

### setup node api server
use Bower, Grunt and the Grunt CLI, and Jasmine Node

node-static
- `npm install node-static` This will install the package locally, but will not save it to the package.json file as a dependency
- `npm install node-static --save` save it to pacakge.json, then got install when `npm install`

npm start
- config in package.json
- start: npm start will run `nodemon app.js`
- test: npm start will run `jasmine-node spec --autotest --color --watch .`

```json
  "scripts": {
    "start": "nodemon app.js",
    "test": "jasmine-node spec --autotest --color --watch ."
  },
```


jasmine-node
- usually install it locally, cause global might be upgraded, the test may not pass, 
- prefer to install the independent jasmine-node

async test in jasmine-node

```js
// pass a callback function to it
it("should respond with hello world", function(done) {
  request("http://localhost:3000/hello", function(error, response, body){
    expect(body).toEqual("hello world");
    done();
  });
});
```



### Server Specs

> To have the server and tests running simultaneously, you have to use 2 terminals. You run npm test on one and npm start on the other.

- servier side test running via jasmine-node
- to test routers and data

# 4	Project: Develop Albums Backbone Collection

Folder structure and dependencies
- folder structor, vendor, models, collections, view, app.js
- bower, grunt, grunt-contrib-uglify, grunt-bower-concat

Tasks
- concat order(jquery, underscore, backbone)
- concat all dependencies to vendor folder and uglify it  

index.html
- include dependencies by all.js
- add app.js, model, collection, view js

Client side test 
- by standalone jasmine lib
- under public folder

# 5	Project: Render Albums Collection


# 6	Project: Render Tracks Collection


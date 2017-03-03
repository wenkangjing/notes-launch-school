Lesson 4: Javascript Tools and Testing

# 1	Introduction


# 2	Dependency Management with Bower

```bash
npm install -g bower

bower help command
bower home <package> // Opens a package homepage
bower info <package> 

bower install jquery
bower install jquery#<version/rnge>

bower init              // wizard to generate a bower.json directly under bower_components folder
bower install jquery -S // to save to dependencies seciton of your bower.json file
bower install           // install listed package in the generated root bower.json file

bower update jquery

bower uninstall jquery
bower prune             // remove not in bower.json


cat // to show file content in shell


```

bower.json
- The bower.json file is meant to be the configuration file that Bower uses to easily install your Bower component on others' computers. 
- This is because Backbone's bower.json manifest tells Bower that it has a dependency, so Bower will recursively check each component for other dependencies and install them automatically.



# 3	Automating Tasks with Grunt

npm
- https://docs.npmjs.com/misc/config
- `-g` global
- `-D: --save-dev` only visible in dev env

Grunt CLI
- npm install -g grunt-cli
- *the CLI is simply the application that runs the Grunt node module locally in your project. This allows for different versions of Grunt to be installed on a per-project basis, which saves you the headache of having to go back and update all of your projects if and when a breaking change is released in a newer Grunt version*

Grunt plugins
- grunt-bower-concat *to concatenate bower components into a single file*
- grunt-contrib-uglify *to reduce its file size*


Gruntfile.js
- at the root of our project
- "default" task will be run if no task is specified when running the Grunt CLI.



* [ ] try glup

# 4	Testing Your Code with Jasmine


# 5	Exercises: Jasmine Testing


# 6	Exercism Exercises


# 7	Project: Writing Test Coverage


# 8	Summary


Lesson 4: Javascript Tools and Testing

# 1	Introduction


# 2	Dependency Management with Bower

```bash
npm install -g bower
npm list bower
npm view bower

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
- http://gruntjs.com/plugins
- grunt-bower-concat *to concatenate bower components into a single file*
- grunt-contrib-uglify *to reduce its file size*


Gruntfile.js
- at the root of our project
- "default" task will be run if no task is specified when running the Grunt CLI.



* [ ] try glup

# 4	Testing Your Code with Jasmine

jasmine and jasmine-node (DOM free)

intro
- https://jasmine.github.io/2.3/introduction.html
- no frameowrk dependencies
- replace the source/spec files with your own.
- **Suites**: `describe(title, func)` Your Tests, can be nested `xdescribe` to disable
- **Specs**: `it(title, func)` test  cases, passing or failing `xit` to pending 
- `expect`: actual value, mathcer function, expected value
- `spy` - A spy only exists in the describe or it block ` spyOn(foo, 'getBar').and.callThrough();`

  
```js
expect(a).toBe(b);
expect(a).not.toBe(null);
expect(message).toMatch(/bar/);
expect(message).toMatch("bar");
expect(a.foo).toBeDefined();
expect(a.bar).not.toBeDefined();
expect(a.foo).not.toBeUndefined();
expect(a.bar).toBeUndefined();    
expect(foo).toBeTruthy();
expect(a).not.toBeTruthy();
expect(null).toBeNull();
expect(a).toBeNull();   
expect(e).toBeLessThan(pi);
expect(pi).not.toBeLessThan(e);     
expect(pi).toBeGreaterThan(e);
expect(e).not.toBeGreaterThan(pi);    
expect(pi).not.toBeCloseTo(e, 2);
expect(pi).toBeCloseTo(e, 0);
expect(foo).toThrowError("foo bar baz"); // foo is a function
expect(foo).toThrowError(/bar/);    
fail("Callback has been called");
expect(foo).toEqual(1);

beforeEach(function() {
  foo += 1;
});

afterEach(function() {
  foo = 0;
});

it("a description", function() {
  expect(foo).toEqual(1);
});

beforeAll(function() {
  foo = 1;
});

afterAll(function() {
  foo = 0;
});

```

spy

```js
spyOn(Honda, 'getPrice'); // temporaryly replace the getPrice method on Honda.prototype object
```

# 5	Exercises: Jasmine Testing
# 6	Exercism Exercises

code challeage
- http://exercism.io/

chocolatey package manager
- https://chocolatey.org/
- `exercism configure --key=YOUR_API_KEY`
- `exercism configure --dir=C:\exercism`


# 7	Project: Writing Test Coverage

folder structor
```
project
  |--index.html
  |--javascripts
        |--lib
        |   |--jasmine
        |--spec
        |   |--bala.spec.js
        |--src
            |--bala.js

```


# 8	Summary


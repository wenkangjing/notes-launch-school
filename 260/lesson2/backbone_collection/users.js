// User model
var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  url: "http://jsonplaceholder.typicode.com/users",
  model: User,
  initialize: function() {
    this.on("sync sort", renderCollection);
  },
  parse: function(response) { // Override 
    response.map(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.company_bs = user.company.bs;
      delete user.company;
    });
    return response;
  }
});

var template = Handlebars.compile($("#users").html());
function renderCollection() {
  $(document.body).html(template({users: blog_writers.toJSON()}));
}

var blog_writers  = new Users();

blog_writers .fetch({
  success: function() {
    console.log(blog_writers.length); 
  }
});

//
// Note: can't run sequentially, run in console instead
//


/*

blog_writers.comparator = "name";
blog_writers.sort();


var new_user = new User({ name: "J", email: "j@bala.com" });
blog_writers.add(new_user);
new_user.save(null, {
  success: function() {
    console.log(blog_writers.length);
  }
});

blog_writers.create({ name: "Shane Riley", email: "shane@example.com" }, {
  wait: true,
  success: function() {
    console.log(blog_writers.length)
  }
});

blog_writers.fetch({
  reset: true,
  success: function() {
    console.log(blog_writers.length); // 10
  }
});

blog_writers.set({
  id: 1,
  name: "Shane Riley",
  email: "shane@example.com"
});

console.log(blog_writers.first().toJSON());
*/
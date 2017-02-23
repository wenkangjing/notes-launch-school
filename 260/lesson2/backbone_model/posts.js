var UserModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/users"

});

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  initialize: function() {
    // user will be fetched and set to model object, when userId changed
    // if (this.has("userId")) {
    //   this.setUser();
    // }
    this.has("userId") && this.setUser(); // same as above
    this.on("change:userId", this.setUser);
    this.on("change", renderPost);
    
  },
  setUser: function() {
    var self = this, // post_1
        user = new UserModel({id: self.get("userId")});

    user.fetch({
      success: function(model, response) {
        self.set("user", user);
        renderPost(self);
      }
    }); 
  }
});

var post_1  = new PostModel({id: 1});
post_1.fetch();

var post_2 = new PostModel({
  id: 2,
  title: "My New Post",
  body: "This is my new blog post. Hope you enjoy it!",
  userId: 2
});
//post_2.fetch();

var postTemplate = Handlebars.compile($("#post").html());

function renderPost(model) {
  var html  = postTemplate({
    name: model.get("name"),
    user: model.has("user") ? model.get("user").get("name"): "n/a",
    title: model.get("title"),
    body: model.get("body")
  });
  $(document.body).append(html);
}

var posts = posts = [{
  title: 'new post',
  published: 'Jan 1, 2017',
  body: 'this is a new post without tags',
}, {  
  title: '2nd post',
  published: 'Feb 1, 2017',
  body: 'this is a second post',
  tags: ['bala'],
}];

var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit <strong>voluptatem</strong> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <em>Nemo enim ipsam voluptatem quia voluptas</em> sit aspernatur aut odit aut fugit.</p>',
  tags: ["blog", "me", "test", "misc."],
};

posts.push(post);

$(function() {

  // get template and compile it into a function
  let postsTemplate = Handlebars.compile($('#posts').html());
  let tagsTemplate = Handlebars.compile($('#tags').html());

  Handlebars.registerPartial('tagsTemplate', $('#tags').html());

  // render and append
  $(document.body).append(postsTemplate({ posts: posts }));
});
Handlebars
==================

# Steps

```html
<!--HTML - includes-->
<script src="/path/to/handlebars.min.js"></script>

<!--HTML - template-->
<script id="handlebars-demo" type="text/x-handlebars-template">
   <div>
      My name is {{name}}. I am a {{occupation}}.
   </div>
</script>
```

```js
// get html
var template = $('#handlebars-demo').html();

// compile to function
var templateScript = Handlebars.compile(template);

// get new html by the given data
var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };
var html = templateScript(context); // html = 'My name is Ritesh Kumar. I am a developer.'

$(document.body).append(html);

```


# Partial

```js
Handlebars.registerPartial(
  'partialTemplate',
  '{{language}} is {{adjective}}. You are reading this article on {{website}}.'
);

var context={
  "language" : "Handlebars",
  "adjective": "awesome"
}

// html
{{> partialTemplate website="sitepoint"}} <br>
{{> partialTemplate website="www.sitepoint.com"}}

// output
// Handlebars is awesome. You are reading this article on sitepoint
// Handlebars is awesome. You are reading this article on www.sitepoint.com
```

# Syntax

# Helper
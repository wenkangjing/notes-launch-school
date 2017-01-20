Debugging Tips
================

# Chrome Dev Tool Tips

http://coolshell.cn/articles/17634.html

in-apge modification
- `document.designMode = "on"`

clear console
- clear()
- CTRL + L

animation 
- More Tools => Animations

直接编辑网页
- 在你的 console 里 输入下面的命令：
- `document.designMode = "on" `


DOM status
- element -> styles
- :hov

remove minify
- {}

speed limit
- Network -> add custom ->  Throttling

copy http request
- network -> XHR -> Copy => Copy as cURL

capture mobile screenshot
- device -> show device frame
- Capture screenshot

DOM Breakpoints

XHR and Event Lisener Breakpoints

DOM tips in Console 
- chrome会帮你buffer 5个你查看过的DOM对象，你可以直接在Console中用 $0, $1, $2, $3, $4来访问。
- 你还可以使用像jQuery那样的语法来获得DOM对象，如：$("#mydiv")
- 你还可使用 $$(".class") 来选择所有满足条件的DOM对象。
- 你可以使用 getEventListeners($("selector")) 来查看某个DOM对象上的事件（如下图所示）。
- 你还可以使用 monitorEvents($("selector")) 来监控相关的事件。比如：`monitorEvents(document.body, "click");`

Functions in Console
- `monitorEvents(document.body, "click");`
- `copy` to clipboard
- `inspact` console -> element tab

Console output

- css

```js
console.todo = function( msg){
  console.log( '%c%s %s %s', 'font-size:20px; color:yellow; background-color: blue;', '--', msg, '--');
}
console.important = function( msg){
  console.log( '%c%s %s %s', 'font-size:20px; color:brown; font-weight: bold; text-decoration: underline;', '--', msg, '--');
}
```

- console.table



console对象除了上面的打日志的功能，其还有很多功能，比如：
- console.trace() 可以打出js的函数调用栈
- console.time() 和 console.timeEnd() 可以帮你计算一段代码间消耗的时间。
- console.profile() 和 console.profileEnd() 可以让你查看CPU的消耗。
- console.count() 可以让你看到相同的日志当前被打印的次数。
- console.assert(expression, object) 可以让你assert一个表达式 
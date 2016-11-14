# HOW TO

1. Show Form modal

Click **item 1** to show `form`

Actually this feature can be achieved by wrapping `form` inside `label`, like Assignment - Web Store. But in this particular case, I didn't do this cause this html validation suggest do not do this `Element form not allowed as child of element label in this context. (Suppressing further errors from this subtree.)`. 

2. Checkbox is a label with background image 

To ensure it looks exactly same as the design file, I didn't ` input checkbox` cause it looks so different than the design. As a result, there will be no interaction. If it is a wrong way, I can provide another version with native `checkbox` if I get a chance..    

# Known Issues

1. Helvetica - no free web font

The font looks a bit different on my Windows PC cause I do not have Helvetica installed, and also failed to search a free web font, so I use below font stack instead, hope it looks ok on Mac or Linux. 

```css
body{
  font: normal 16px Helvetica, Arial, sans-serif;
}
```

# Reviews

Score: 97/100

> From Victor Paolo Reyes (TA). Hi Jamie! This is nicely done! HTML and CSS code look good. Web page looks good as well. There weren't any complaints from w3c also (html and css).
> For improvement:
> Can you have the modals close when either Save or Mark as Complete is clicked?
> Notice also that Date input types in the modal. All are selects/dropdowns. Please adjust accordingly.

Revision: 

- Add an extra ghost input to close form. 
- Change DayMonthYear to select/option.
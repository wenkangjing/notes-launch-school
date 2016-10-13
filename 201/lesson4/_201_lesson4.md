HTML and CSS - Lesson 4: Forms and Advanced CSS
==================================================


# 1	Introduction


# 2	The Form Element

- action: sending data to server, override by formaction
- method: get or post
- novalidate
- autocomplete
- autocapitalize and autocorrect
- target: _blank for new window, _parent or _top

# 3	The Input Element

- button, checkbox, number, password, tel, url
- radio: same name as a group
- range: slider
- reset: button to empty all fields
- color: color pickup
- search
- submit 
- date, week, month: pickup
- datetime, datetime-local
- email
- file: file open dialog
- hidden: not display but value is submitted to the server
- image a graphy  submit button

# 4	Text Input

```html
<input type="text" minlength="2" name="name" placeholder="john" />
<input type="text" name="phone" placeholder="(212) 555-1212" />
```
- name is phone
- value is whatever user input
- default prompt is the text in placeholder
- submit to 'login.html?name=johnabc&phone=123456'

minlength and maxlength


# 5	Checkbox and Radio Input

> radios with same name different value work as radio group

```html
<label>
  <input type="radio" name="favorite_color" value="red" />
  Red
</label>
<label>
  <input type="radio" name="favorite_color" value="orange" />
  Orange
</label>
<label>
  <input type="radio" name="favorite_color" value="yellow" />
  Yellow
</label>
```


# 6	General Attributes for the Input Element

- input id <> lable for (**to extend click region**)
- required
- autofocus: the first field need to input
- checked
- disabled: dim
- readonly: dim not work on checkboxes and redios
- inputmode: for mobile devices
- pattern for regex validation

# 7	Select and Textarea Elements

Select
- single as dropdown list
- multiple as multi selectable list
- size: visiable items

```html
<select name="movie" multiple>
  <optgroup label="DVD">
    <option>Frozen</option>
    <option>Toy Story 3</option>
  </optgroup>
  <optgroup label="Blu-Ray">
    <option>Monsters, Inc</option>
    <option>WALL-E</option>
  </optgroup>
</select>
```

Textarea
- multi line edit
- no value attribute, will return name="text between opending and closing tag"
- rows / cols:  visible rows and cols
- size

# 8	Exercises: Forms

input type
- button: just button
- submit: the button that trigger http method to submit data to server

# 9	Basic Form Layouts -->Important<--

## Option 1: label and input

label above input (**prefered whenever possible**)
- lable: **display:block** 
- label: padding-bottom to 
- input[type="text"]: style (optional)
- form: border (optional)
- alignment: box-sizing:border-box 

pairing in one line
- wrap pair in div to keep a pair per line
- label: inline-block, a enough fixed width (**no good**)
- label/input: vertical-align:middle (alignment)
- input: inline-block, width:50%

## Option 2: definition list
- div dl as container
- dt label
- dd input

left/rigth layout 

```css
dt, dd {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
}
dt {
  width: 25%;
  padding-right: 20px;
  text-align:right; /*label algin right*/
}
dd {
  width: 75%;
  margin:0;
}
input[type="text"] {
  width: 100%;
}
```

nested fields
- just one pair of label/input in dl
- multiple dl

# 10	Walkthrough: Creating a Contact Form

tips:

- write down content in plain text
- convert to label/input or p/input
- set proper attributes according to details, placeholder, default value, etc
- wrap to dl dt dd in needed
- double check each input contains name attribute to submit
- check label for link to input id - click region
- styling

> whenever you set width and padding to one Element
> make it box-sizing to border-box for each calculation


input attributes
- number: min and max, still can input more than max, so need furthervalidation
- text: maxlength

# 11	Project: Advanced Form Layout

# 12	Pseudo Elements

# 13	Sprite Sheets

# 14	Assignment: Adding Design Touches With Pseudo Elements

# 15	Solution: Adding Design Touches With Pseudo Elements

# 16	Project: Company Site

# 17	Assignment: Company Site - Header and Navigation

# 18	Assignment: Company Site - Main Area and Footer

# 19	Assignment: Company Site - Projects Page

# 20	Assignment: Company Site - Team Page

# 21	CSS Media Queries

# 22	Project: Company Site Responsive Breakpoints

# 23	Solution: Company Site Responsive Breakpoints

# 24	Fluid and Liquid Layouts

# 25	Project: Photo Gallery with Fluid Layout

# 26	Solution: Photo Gallery with Fluid Layout

# 27	Summary

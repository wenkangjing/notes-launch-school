HTML Form
=================

[html forms guiild](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)

[w3c html validation](https://validator.w3.org/#validate_by_input)

```css
textarea, input, button, select { 
  font-family: inherit; 
  font-size: inherit; 
  -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
    -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
        box-sizing: border-box;
}

```

## layout


### horizontal layout
  ```
    name: -----
  email: -----
    tel: -----
  ```

- use label and input pair
- use precentage width to ensure one pair per row
- label `vertical-align:top` + `text-align:right`

**Or use `div` or `p` wrap the pair**

### stack layout

  ```
  name
  -----
  email
  -----
  tel
  -----
  comments
  -------------
  -------------
  ```

  - use dl
  - dt wrap label
  - dd wrap input
  
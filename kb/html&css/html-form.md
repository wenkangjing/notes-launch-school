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
> whenever you set width and padding to one Element
> make it box-sizing to border-box for each calculation

# Layout
Stack
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
  
Oneline  
  ```
    name: -----
  email: -----
    tel: -----
  ```

#### 1. stack - label and input (prefered whenever possible)

  - label display:block
  - use for/id link label/input

#### 2. stack - definition list
  - use dl
  - dt wrap label
  - dd wrap input, remove margin/padding
  
  
#### 3. oneline - lable and input inline-block
- label: inline-block, witdh:a enough fixed or precentage (**no good**)
- input: inline-block, witdh:the reset
- label `vertical-align:top` + `text-align:right`

**Or use `div` or `p` wrap the pair**

#### 4. online - definition list
- dt, dd: inline-block
- dt: fixed or precentage width;
- dd: the rest

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


## HTML coding proactices

1. css id is unique
- id is unique
- class can be duplicated

2. use semantic element
- use h1, p, strong, div
- no br, span

3. strucutre
- html = head + body

4. syntax
- lowercase 
- indent
- always double quotes
- no / at the end of self-closing element

5. use alt text attribute on images

6. separate style

7. avoid too many div, reduce markup

8. continually refactor code



## CSS coding practises

1. Comments
- commments on top of each style /* Primary header */

2. multiple lines
- one property per line

3. class name
- lowercase
- use hyphen delimiters

4. selectors
- avoid id selector
- use class selector
- only 2 or 3 level nested, specific class if needed

5. prefer shorthand

6. prefer 3-char shorthand hex color

7. drop units from 0
- use 0
- not 0px or 0%

8.  Group & Align Vendor Prefixes

## Tips

#### input and textarea not take body font

```css
textarea, input, button, select { 
  font-family: inherit; font-size: inherit; 
}

```
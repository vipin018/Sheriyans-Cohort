## Today's Topic is understanding CSS 

- CSS is Cascading Style Sheet
- CSS is used to style the HTML elements that makes the website more attractive and beautiful.
- CSS is used for any kind of visual modification in the website.

### CSS Syntax

```css
selector {
    property: value;
}
```

- selector is the HTML element name. (h1, p, div, etc.)
- property is the CSS property name. (color, background-color, font-size, etc.)
- value is the CSS property value. (red, blue, 100px, etc.)

### CSS Selector

- CSS Selector is used to select the HTML element.

- There are 5 types of CSS Selector.

1. Simple Selector example: h1, p, div, etc.
2. Combinator Selector example: h1 p, h1 > p, h1 + p, h1 ~ p, etc.
3. Pseudo-class Selector example: a:hover, a:active, a:visited, etc.
4. Pseudo-element Selector example: p::first-line, p::first-letter, etc.
5. Attribute Selector example: [attribute], [attribute=value], [attribute~=value], [attribute|=value], [attribute^=value], [attribute$=value], [attribute*=value], etc.


Note : 
- Inline CSS is used to style the HTML element directly in the HTML file.
- Inline CSS is used to style the HTML element directly in the HTML file.
- The priority of Inline CSS is higher than External CSS.

### class and id

- class is used to style the HTML element with the same class name.
- id is used to style the HTML element with the same id name.
- **The priority of id is higher than class.**
- class can be repeated but id can't be repeated because id is unique and class is not unique so we can use class multiple times in the HTML file but id can't be used multiple times in the HTML file.
example:

```html
<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
<p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

```


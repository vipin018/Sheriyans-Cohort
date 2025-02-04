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

### the priority list

 id >> class >> tag >> star(*) 

- star(*) is used to select all the HTML elements.

#### difference between font-style *oblique* and *italic* 

- italic and oblique both are used to make the text italic but the difference is that oblique is more modern and italic is more traditional.

### font-weight

- font-weight is used to make the text bold.
 900 is the highest font-weight.
 600 is the medium font-weight.
 400 is the normal font-weight.
 100 is the lowest font-weight.

### line-height

- line-height is used to set the space between the lines of the text.

### letter-spacing

- letter-spacing is used to set the space between the letters of the text.

### word-spacing

- word-spacing is used to set the space between the words of the text.

### text-align

- text-align is used to set the alignment of the text.
1. left -> text will be aligned to the left.
2. right -> text will be aligned to the right.
3. center -> text will be aligned to the center.
4. justify -> text will be aligned to the justify means the text will be aligned to the left and right.

### text-indent

- text-indent is used to set the indentation of the text, in simple words it is used to set the space before the text.

## colors

- colors are used to set the color of the text.
- there are 3 types of colors in CSS.
1. color name -> red, blue, green, etc.
2. rgb -> rgb(255, 255, 255) 
3. hex -> #ffffff
4. rgba -> rgba(255, 255, 255, 0.5) a is the opacity of the color.
5. hsl -> hsl(255, 255, 255) h is the hue, s is the saturation, l is the lightness.
6. hsla -> hsla(255, 255, 255, 0.5) a is the opacity of the color.



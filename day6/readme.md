## Advanced CSS ( pseudo classes, transitions, animations)

### pseudo classes

- hover
- focus
- active
- after
- before

### hover

- when we hover over an element, we can change the style of the element.
- we can use the hover pseudo class to change the style of the element when we hover over it.

### before and after

- we can use the before and after pseudo classes to add content before and after an element.
example:

```html
<li>item 1</li>
```

```css
li::before {
  content: "🚀";
}
```
so the before pseudo class will add a 🚀 before the element. 
like this: 🚀 item 1

- we can also use the after pseudo class to add content after an element.
for example:

```html
<li>item 1</li>
```

```css
li::after {
  content: "🔥";
}
```
so the after pseudo class will add a 🔥 after the element.
like this: item 1 🔥


## transitions

- transitions are used to animate the style of an element.
- we can use the transition pseudo class to animate the style of an element.

example:

```html
<button>Click me</button>
```

```css
button {
  transition: all 0.5s ease-out;
}
```
 what this will do is that it will animate the style of the button when we hover over it.
 transition is a property that takes 3 values:
 - property: the property we want to animate. (all, background-color, color, etc.)
 - duration: the duration of the animation. (0.5s, 1s, 2s, etc.)
 - timing function: the timing function of the animation. (ease-in, ease-out, ease-in-out, linear, etc.)

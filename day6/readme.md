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


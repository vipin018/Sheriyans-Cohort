# DOM - Document Object Model

## Pillars of DOM
 - Selection of elements
 - Changing HTML
 - Changing CSS
 - Event Listener


### Selection of elements
 it is the process of selecting the elements from the HTML document.
example:
```javascript
const h = document.querySelector("h1");
const p = document.querySelector("p");
const body = document.querySelector("body");
const html = document.querySelector("html");
const div = document.querySelector("div");
```

### Changing HTML
 it is the process of changing the HTML content of the elements.
 example:
 ```javascript
 h.innerHTML = "Hello World";
 p.innerHTML = "This is a paragraph";
 body.innerHTML = "This is the body";
 html.innerHTML = "This is the html";
 div.innerHTML = "This is the div";
 ```

### Changing CSS
 it is the process of changing the CSS of the elements.
 example:
 ```javascript
 h.style.color = "red";
 p.style.color = "blue";
 ```

### Event Listener
 it is the process of adding an event to the elements.
 - events are : click, mouseover, mouseleave, keydown, keyup, etc.

### Event Listener with parameters
 example:
 ```javascript
 h.addEventListener("click", function(){
    alert("Hello World");
 });
 ```

 **que: difference between innerHTML and textContent?**
 - innerHTML is used to change the HTML content of the elements.
 - textContent is used to change the text content of the elements.

 **que: difference between getElementById and querySelector?**
 - getElementById is used to get the element by its id.
 - querySelector is used to get the element by its selector.

 **que: difference between style and cssText?**
 - style is used to change the style of the elements.
 - cssText is used to change the css of the elements.



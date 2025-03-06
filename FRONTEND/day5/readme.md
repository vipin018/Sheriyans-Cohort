## today's topic is Advanced Styling & layout in CSS

### 1. Background
1. linear-gradient (direction, color1, color2, color3, color4) 
- this will create a gradient of colors in the direction you specify like top, bottom, left, right, etc.

2. radial-gradient (circle at position, color1, color2, color3, color4)
- this will create a gradient of colors in the circle you specify like top, bottom, left, right, etc.

3. conic-gradient (from angle at position, color1, color2, color3, color4)
- this will create a gradient of colors in the conic you specify like top, bottom, left, right, etc.

### 2. Background Image
- background-image: url("image-url");
 #### background-size
 - cover: this will cover the entire background with the image
 - contain: this will contain the entire background with the image
 - 100% 100%: this will cover the entire background with the image

 ### what is difference between cover and contain?
- cover : in this the image will cover the size of the container doesn't matter if the image is smaller or bigger than the container.
- contain : in this the image will cover the size of the container but if the image is smaller than the container then it will repeat the image to cover the container.


 #### background-position
 - center: this will center the image in the container
 - top left: this will position the image at the top left of the container
 - top right: this will position the image at the top right of the container
 - bottom left: this will position the image at the bottom left of the container
 - bottom right: this will position the image at the bottom right of the container

### que : how to make a background image to cover the entire container?
- we can use the background-size property to cover the entire container.
- we can use the background-position property to center the image in the container.
- we can use the background-repeat property to repeat the image in the container.

## Positions
- static : this is the default position of the element.
- relative : this is the position of the element relative to its normal position.
- absolute : this is the position of the element relative to its parent element.
- fixed : this is the position of the element relative to the viewport.
- sticky : this is the position of the element relative to the viewport and it will stick to the viewport when you scroll.

### z-index
- this is the property that controls the stacking order of the elements.
- the higher the z-index value, the higher the element will be in the stacking order.

### how would you explain position absolute in simple words?
- position absolute is the position of the element relative to its parent element.
- the parent element must have a position property other than static.
- using position absolute we can position the element anywhere in the container.

### what is the difference between position absolute and position relative?
- position absolute is the position of the element relative to its parent element.
- position relative is the position of the element relative to its normal position.


## Display
- display: none: this will hide the element.
- display: block: this will display the element as a block element.
- display: inline: this will display the element as an inline element.
- display: inline-block: this will display the element as an inline-block element.
- display: flex: this will display the element as a flex container.
- display: grid: this will display the element as a grid container.

### flex
- flex-direction: row: this will display the element in a row.
- flex-direction: column: this will display the element in a column.
- flex-direction: row-reverse: this will display the element in a row-reverse.
- flex-direction: column-reverse: this will display the element in a column-reverse.

### flex-wrap
- flex-wrap: wrap: this will wrap the element in a row.
- flex-wrap: nowrap: this will not wrap the element in a row.
- flex-wrap: wrap-reverse: this will wrap the element in a row-reverse.

### justify-content 
- justify-content: flex-start: this will justify the element to the start of the container.
- justify-content: flex-end: this will justify the element to the end of the container.
- justify-content: center: this will justify the element to the center of the container.
- justify-content: space-between: this will justify the element to the space between the container.
- justify-content: space-around: this will justify the element to the space around the container.
- justify-content: space-evenly: this will justify the element to the space evenly the container.

### align-items
- align-items: flex-start: this will align the element to the start of the container.
- align-items: flex-end: this will align the element to the end of the container.
- align-items: center: this will align the element to the center of the container.
- align-items: stretch: this will stretch the element to the container.
- align-items: baseline: this will align the element to the baseline of the container.


### que : how to center the element in the container?
- we can use the justify-content property to center the element in the container.
- we can use the align-items property to center the element in the container.



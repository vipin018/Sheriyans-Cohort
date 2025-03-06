## today's topic is responsive of page

- responsive of page means that the page is responsive to the device size
- we use media query to make the page responsive
- media query is a CSS technique that allows you to apply different styles to different devices
- media query is a CSS technique that allows you to apply different styles to different devices
- media query is a CSS technique that allows you to apply different styles to different devices

### Note:
- default font size of the browser is 16px
- 1rem = 16px
- 1em = 16px


### we are going to learn about size values

1. px (pixel)
2. %
3. rem
4. em
5. vh
6. vw


#### px (pixel)
- px is a unit of measurement that represents the smallest unit of a screen
- px is a fixed size and it is not responsive to the device size
- px value does not change with the device size


#### % (percentage)
- % is a unit of measurement that represents the percentage of the parent element
- % is a responsive unit and it is responsive to the device size
- % value changes with the device size
- % unit depends on the parent element


#### rem (root em)
- rem is a unit of measurement that represents the root element
- rem is a responsive unit and it is responsive to the device size
- rem value changes with the device size
- rem unit depends on the root element


#### em (em)
- em is a unit of measurement that represents the font size of the parent element
- em is a responsive unit and it is responsive to the device size
- em value changes with the device size
- em unit depends on the parent element


##### difference between rem and em
- rem is a unit of measurement that represents the root element
- em is a unit of measurement that represents the font size of the parent element
- rem unit depends on the root element
- em unit depends on the parent element

#### vh (viewport height)
- vh is a unit of measurement that represents the height of the viewport
- vh is a responsive unit and it is responsive to the device size
- vh value changes with the device size
- vh unit depends on the viewport


#### vw (viewport width)
- vw is a unit of measurement that represents the width of the viewport
- vw is a responsive unit and it is responsive to the device size
- vw value changes with the device size
- vw unit depends on the viewport


### Media Queries 

syntax:
```css
@media (condition){
     /* styles */
     #parent{
        background-color: forestgreen;
        height: 200px;
        width: 200px;
     }
}
```
condition:
- min-width -> it will apply the styles when the width of the device is greater than or equal to the min-width
- max-width -> it will apply the styles when the width of the device is less than or equal to the max-width
- min-height -> it will apply the styles when the height of the device is greater than or equal to the min-height
- max-height -> it will apply the styles when the height of the device is less than or equal to the max-height
- orientation -> it will apply the styles when the orientation of the device is portrait or landscape
- aspect-ratio -> it will apply the styles when the aspect ratio of the device is greater than or equal to the aspect-ratio


### breakpoints

- breakpoints are the points where the styles of the page will change
 EXAMPLES:
 - for mobile devices the breakpoint is 600px
 - for tablet devices the breakpoint is 768px
 - for desktop devices the breakpoint is 1024px
 - for large desktop devices the breakpoint is 1200px

 so to make the page responsive we need to use media queries to apply different styles to different devices
 like 
 - for mobile the media query will be (max-width:600px) and
 - for tablet the media query will be (min-width:600px and max-width:768px) and
 - for desktop the media query will be (min-width:768px and max-width:1024px) and
 - for large desktop the media query will be (min-width:1024px and max-width:1200px)

### flexbox

- flexbox is a layout model that allows you to align and distribute space among items in a container
- flexbox is a layout model that allows you to align and distribute space among items in a container
- flexbox is a layout model that allows you to align and distribute space among items in a container

### flexbox properties
- display: flex; -> it will make the container a flex container
- flex-direction: row; -> it will make the children in a row
- flex-direction: column; -> it will make the children in a column
- flex-direction: row-reverse; -> it will make the children in a row in reverse order
- flex-direction: column-reverse; -> it will make the children in a column in reverse order
- flex-wrap: wrap; -> it will make the children wrap to the next line if the container is not enough to fit the children
- flex-wrap: nowrap; -> it will make the children not wrap to the next line if the container is enough to fit the children
- flex-wrap: wrap-reverse; -> it will make the children wrap to the next line in reverse order if the container is not enough to fit the children
- justify-content: center; -> it will make the children in the center of the container
- justify-content: flex-start; -> it will make the children in the start of the container
- justify-content: flex-end; -> it will make the children in the end of the container
- justify-content: space-between; -> it will make the children in the space between the container
- justify-content: space-around; -> it will make the children in the space around the container
- justify-content: space-evenly; -> it will make the children in the space evenly the container


### flex-grow
- flex-grow: 1; -> it will make the child grow to the size of the container if the container is not enough to fit the children
- flex-grow: 0; -> it will make the child not grow to the size of the container


### flex-shrink
- flex-shrink: 1; -> it will make the child shrink to the size of the container if the container is not enough to fit the children
- flex-shrink: 0; -> it will make the child not shrink to the size of the container

### grid
- grid is a layout model that allows you to align and distribute space among items in a container
- it is a two dimensional layout model
- it is a layout model that allows you to align and distribute space among items in a container

#### what is difference between flex and grid
- flex is a one dimensional layout model
- grid is a two dimensional layout model
- flex is a layout model that allows you to align and distribute space among items in a container
- grid is a layout model that allows you to align and distribute space among items in a container




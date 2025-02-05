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


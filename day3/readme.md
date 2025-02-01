# Today's Topic is understanding HTML

- html is a markup language that is used to create web pages.
- html is structured of the website 

## tags
- everything jo bhi < > ese likha jae is tag 

## some important tags
- heading tags { h1 h2 h3 h4 h5 h6 }
- paragraph tags { p }
- line break tags { br }
- horizontal line tags { hr }
- image tags { img }
- video tags { video }
- audio tags { audio }
- link tags { a }
- list tags { ul ol li }
- bold tags { b }
- italic tags { i }
- underline tags { u }
- strike tags { strike }
- subscript tags { sub } 
- superscript tags { sup }
- list item tags { li }
- ordered list tags { ol }
- unordered list tags { ul }
- pre tags { pre }
- blockquote tags { blockquote }


### what is the difference between pre and blockquote tag?
- pre tag is used to display the text exactly as it is written in the code. it includes all the spaces and line breaks.
- blockquote tag is used to display the text as a block of text. it is used to display the text in a block format.
for example:
```html
<pre>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus veniam numquam quae, perferendis at fugit esse! Nostrum minima eum eos quaerat repellendus voluptate porro ut aut quibusdam, facere fugit? Laboriosam, quae? Nulla debitis assumenda quam error ducimus, consectetur modi consequatur nisi voluptates totam vero exercitationem ratione nam nobis explicabo repellat quae dicta soluta recusandae et vel officia labore. Quaerat?
</pre>
``` 
```html
<blockquote>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus veniam numquam quae, perferendis at fugit esse! Nostrum minima eum eos quaerat repellendus voluptate porro ut aut quibusdam, facere fugit? Laboriosam, quae? Nulla debitis assumenda quam error ducimus, consectetur modi consequatur nisi voluptates totam vero exercitationem ratione nam nobis explicabo repellat quae dicta soluta recusandae et vel officia labore. Quaerat?
</blockquote>
```

### how to hover through one section to another section?
- we can use the anchor tag to hover through one section to another section.
- we can do it by using the href attribute.
- giving the id to the section and then using the anchor tag to hover through one section to another section.
for example:
```html
<a href="#section1">Section 1</a>
<a href="#section2">Section 2</a>
<a href="#section3">Section 3</a>
```
if we click on the section 1, it will take us to the section 1. and if we click on the section 2, it will take us to the section 2. and if we click on the section 3, it will take us to the section 3.

## what are semantic tags?
- semantic tags are the tags that have a meaning.
- semantic tags are used to describe the content of the page.
- semantic tags are used to make the page more readable and understandable.
- semantic tags are used to make the page more accessible.
- it is also good for SEO.
- some of the semantic tags are:
    - header {head of the page}
    - footer {footer of the page}
    - article {article of the page}
    - section {section of the page}
    - nav {navigation of the page}
    - aside {aside of the page}
    - main {main content of the page}

### what is difference between block and inline element?
- block element is the element that takes the full width of the page.
- inline element is the element that takes the width of the content.
for example:

# j$
Tiny pasteable HTML5 version of jQuery

## Current functions
- $(selector) ~ j$ selector
- $(element) ~ Converts element to j$ selector
- $().each(func) ~ Loops through selector
- $().addClass(class) ~ Add a className
- $().removeClass(class) ~ Remove a className
- $().attr(name, value) ~ Set attribute
- $().attr({name: value}) ~ Set attributes
- $().html() ~ Returns innerHTML
- $().html(html) ~ Sets innerHTML
- TO DO: $().removeAttr({name: value}) ~ Remove attributes
- TO DO: $().attr(name) ~ Get attributes
- TO DO: $().remove() ~ Removes element from DOM
- TO DO: $().find(selector) ~ Selects children
- TO DO: $().filter(selector) ~ Limits selecton to match selector
- TO DO: $().is(selector) ~ Checks if element matches selector
- TO DO: $().is(element) ~ Checks if element matches element
- TO DO: $().append(j$) ~ Adds elements to end
- TO DO: $().prepend(j$) ~ Adds elements to beginning
- TO DO: $().empty() ~ Clears innerHTML


```javascript
console.log($('article'));

var $articles = $('article').each(function(index, el){
  $(this).addClass('item-'+index).html('Item '+index).removeClass('block');
});
console.log($articles); 
//$articles.addClass('milk');

$('.item-2').attr('title', 'Hi!!!');
```

Codepen: http://codepen.io/anon/pen/Wwveeg?editors=1010

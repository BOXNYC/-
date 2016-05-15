** Version abandoned, use v2.0 **

# j$
Tiny pasteable HTML5 version of jQuery

## Current functions
- $(selector|element) ~ j$ selector
- $.each(func) ~ Loops through selector
- $.addClass(class) ~ Add a className
- $.removeClass(class) ~ Remove a className
- $.attr(name[, value | {name: value}]) ~ Sets or gets(TO DO) attributes.
- $.html([html]) ~ Returns or sets innerHTML

## Coming soon
- TO DO: $(func) ~ DOM ready listener
- TO DO: $.removeAttr(name | [name]) ~ Removes attributes
- TO DO: $.remove() ~ Removes element from DOM
- TO DO: $.find(selector) ~ Selects children
- TO DO: $.filter(selector) ~ Limits selecton to match selector
- TO DO: $.is(selector|element) ~ Checks if element matches selector
- TO DO: $.append(j$) ~ Adds elements to end
- TO DO: $.prepend(j$) ~ Adds elements to beginning
- TO DO: $.empty() ~ Clears innerHTML
- TO DO: $.on(method, func) ~ DOM event listener
- TO DO: $.off(method, func) ~ DOM event listener


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

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : The difference between getElementBYId, getElementsByClassName, querySelector and querySeletorAll is

1. getElementById gets one element by its ID
2. getElementsByClassName gets all elements with the same class, like an array
3. querySelector gets the first element that matches the CSS selector
4. querySelectorAll gets all elements that match the CSS selector

How do you create and insert a new element into the DOM?

Answer : Process of creating and inserting a new element into the DOM

1. Create a new element using document.createElement('tagname')
2. Add text using innerText
3. Find the parent element using getElementById
4. Add the new element to the parent using appendChild


What is Event Bubbling and how does it work?

Answer : When you click a child element, the event also goes to the parent, then to the parent’s parent, and up to the document.
It is like if something happens to a child, the parents and grandparents are affected too.

What is Event Delegation in JavaScript? Why is it useful?
Answer : Add a listener to the parent instead of every child.
The parent can detect which child was clicked.
Useful because new child elements added later will also work without extra listeners.

What is the difference between preventDefault() and stopPropagation() methods?

Answer : 
preventDefault stops the browser’s default action but the event still goes up.
stopPropagation stops the event from going to parent elements.

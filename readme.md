## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

## Readme

### Answer the following questions Part by Part:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1. ## The difference between getElementById ,getElementsByClassName, and querySelector / querySelectorAll-\_-

   **getElementByID**
   select a single element which define by unique Id.
   **getElementsByClassName**
   select multiple element which relevant with a similar class name.
   **querySelector/querySelectorAll**
   It gives you always first element , what have you define. You can use it by id, class, and also with nested selector of element like (#section .div #h3). querySelector সবসময় root element-এর ভেতর থেকে খুঁজে পাওয়া relevant প্রথম element-কেই রিটার্ন করে। querySelectorAll root element-এর ভেতর থেকে parameter-এ define করা selector অনুযায়ী খুঁজে পাওয়া All relevant element-ই return করে.

2. If you want to create a new element in the document, you need to call the `document.createElement()` function and pass the HTML tag name as a string
   To insert this element into the DOM, first select a parent element. Then use methods like `appendChild(), append(), or prepend()`on that parent element to add the new element.

3. When user click on an element, event start from that element. Then it go up to parent, then parent’s parent, then document. it's call `event buble` behavior.

4. And in `event delegation` we don’t need to put event listener in every small element. We can put event listener in it's parent element. Then we can check which child was clicked. It so useful when many buttons or dynamic elements remain on a parent element.

5. Event normally behave like bubble such as (child → parent → document). If we don’t want it, we can use `stopPropagation()` function. It will stop the bubbling.
   And Some elements have default action. We can control or stop element default action behavior by calling `preventDefault() `function.

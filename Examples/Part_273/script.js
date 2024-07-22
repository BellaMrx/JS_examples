const button = document.getElementById('create');
console.log(button.onclick);                        // Output of the function
console.log(typeof button.onclick);                 // Output: function
console.log(button.getAttribute('onclick'));        // createContact()
console.log(typeof button.getAttribute('onclick')); // Output: string
console.log(button.style);                          // Output of the CSSStyleDeclaration
console.log(typeof button.style);                   // Output: object
console.log(button.getAttribute('style'));          // background-color: white
console.log(typeof button.getAttribute('style'));   // Output: string


const allListItemElements = document.getElementsByTagName('li');
console.log(allListItemElements.length);    // output: 8
const subList = document.getElementById('list-2');
const subListListItems = subList.getElementsByTagName('li');
console.log(subListListItems.length);       // output: 4
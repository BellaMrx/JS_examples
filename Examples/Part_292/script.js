function handler(ev) {
    const e = ev || window.event;
    const target = e.target || e.srcElement;
    this.classList.toggle('selected');
    console.log('Clicked on node with ID "' + target.id + '"');
    console.log('Event at node with ID "' + this.id + '"');
  }
  function init() {
    const elements = document.querySelectorAll('.level1, .level2, .level3');
    for(let i=0; i<elements.length; i++) {
      elements[i].addEventListener('click', handler, true);
      // elements[i].onclick = handler;              // Always bubbling phase
      // elements[i].attachEvent('click', handler);  // Internet Explorer < 9 always bubbling phase
    }
  }
  document.addEventListener('DOMContentLoaded', init);
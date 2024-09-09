function init() {
    const element = document.getElementById('example')
    const event = new Event(
      'Example',                // Type of event
      {
        bubbles: true,          // Allow bubbling
        cancelable: false       // Standard actions cannot be ...
                                // ... be prevented.
      });
  
    element.addEventListener(
      'Example',                                // Type of event
      (event) => {
        console.log('Event triggered');
        console.log(event.type);                // "Example"
      },
      false
    );
    element.dispatchEvent(event);
  }
  
  document.addEventListener('DOMContentLoaded', init);
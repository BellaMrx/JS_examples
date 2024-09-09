function init() {
    const element = document.getElementById('example')
    const event = new CustomEvent('Example', {
      detail: {
        firstName: 'Rick',
        lastName: 'Sample',
        id: 420
      }
    });
    element.addEventListener(
      'Example',
      (event) => {
        console.log('Event triggered');
        console.log(event.type);             // "Example"
        console.log(event.detail.firstName); // "Rick"
        console.log(event.detail.lastName);  // "Sample"
        console.log(event.detail.id);        // 420
      },
      false
    );
    element.dispatchEvent(event);
  }
  
  document.addEventListener('DOMContentLoaded', init);
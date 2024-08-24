function init() {
    const circle = document.getElementById('circle');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Start dragging when the circle is touched
    circle.addEventListener('touchstart', function(event) {
      isDragging = true;
      const touch = event.touches[0];
      const circleRect = circle.getBoundingClientRect();

      // Calculate offset from the top-left corner of the circle
      offsetX = touch.clientX - circleRect.left;
      offsetY = touch.clientY - circleRect.top;
    });

    // Move the circle as the finger moves
    window.addEventListener('touchmove', function(event) {
      if (isDragging) {
        const touch = event.touches[0];
        const newLeft = touch.clientX - offsetX;
        const newTop = touch.clientY - offsetY;

        // Set the new position of the circle
        circle.style.left = newLeft + 'px';
        circle.style.top = newTop + 'px';
      }
    });

    // Stop dragging when the touch ends
    window.addEventListener('touchend', function(event) {
      isDragging = false;
    });

    // Prevent default touch behavior to avoid interference with dragging
    circle.addEventListener('touchmove', function(event) {
      event.preventDefault();
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
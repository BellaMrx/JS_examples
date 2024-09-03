function handleLinkClicked(e) {
  console.log('Clicked link');
  e.preventDefault();
}

function init() {
  const element = document.getElementById('link');
  element.addEventListener(
    'click',
    handleLinkClicked,
    false
  );
}

document.addEventListener('DOMContentLoaded', init);
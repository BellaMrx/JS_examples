function handleLinkClicked(e) {
  console.log('Clicked link');
  return false;
}

function init() {
  const element = document.getElementById('link');
  element.onclick = handleLinkClicked;
}

document.addEventListener('DOMContentLoaded', init);
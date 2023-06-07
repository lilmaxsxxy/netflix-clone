const parentList = document.getElementById('.dropdowns');

// Add event listener to the parent list element
parentList.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    // Toggle the visibility of the sub-list by adding/removing the 'hidden' class
    const subList = event.target.querySelector('.sub-list');
    subList.classList.toggle('hidden');
  }
});
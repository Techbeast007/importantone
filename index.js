// Set the "Home" menu item as active on page load
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.section1-menu-item');
    menuItems.forEach(item => {
        if (item.textContent.trim() === "Home") {
            item.classList.add('active'); // Add active class to Home
        } else {
            item.classList.remove('active'); // Ensure other items do not have the active class
        }
    });
});


const cards = document.querySelectorAll('input[name="slide"]');
let currentIndex = 0;

function autoSwitch() {
  cards[currentIndex].checked = true; // Expand the current card
  currentIndex = (currentIndex + 1) % cards.length; // Move to the next card

  setTimeout(() => {
    cards[currentIndex].checked = false; // Collapse the card after 3 seconds
  }, 3000); // Time for expansion
}

// Change every 3 seconds
setInterval(autoSwitch, 6000); // Expansion + collapse timing

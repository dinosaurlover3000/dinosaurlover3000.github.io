// Function to display a welcome message when the page loads
function displayWelcomeMessage() {
    alert("Welcome to dinosaurlover3000's website!");
}

// Function to highlight the current page link in the navigation bar
function highlightCurrentPageLink() {
    var currentPage = window.location.pathname;
    var links = document.querySelectorAll('nav ul li a');
    
    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current');
        }
    });
}

// Call functions when the page loads
window.onload = function() {
    displayWelcomeMessage(); // Display welcome message
    highlightCurrentPageLink(); // Highlight current page link in navigation
};

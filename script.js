document.addEventListener('DOMContentLoaded', function() {
    // The form submission is now handled by Formspree.
    // You can add other interactive scripts here if needed.
    
    // Visitor count functionality
    function updateVisitorCount() {
        let visitorCount = localStorage.getItem('visitorCount');
        
        if (visitorCount === null) {
            // First visit
            visitorCount = 1;
        } else {
            // Increment existing count
            visitorCount = parseInt(visitorCount) + 1;
        }
        
        // Store the updated count
        localStorage.setItem('visitorCount', visitorCount);
        
        // Display the count
        const visitorElement = document.getElementById('visitor-number');
        if (visitorElement) {
            visitorElement.textContent = visitorCount.toLocaleString();
        }
    }
    
    // Update visitor count when page loads
    updateVisitorCount();
}); 

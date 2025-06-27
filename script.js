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

    // Dropdown toggle for Our Services (hover and click)
    var dropdown = document.querySelector('.dropdown');
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdown && dropbtn && dropdownContent) {
        function isMobile() {
            return window.innerWidth <= 600;
        }
        // Mobile: tap to toggle
        dropbtn.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            }
        });
        // Desktop: hover only
        dropdown.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                dropdownContent.style.display = 'block';
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                dropdownContent.style.display = 'none';
            }
        });
        // Close on outside click (mobile only)
        document.addEventListener('click', function(event) {
            if (isMobile() && !dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    }
});

document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var isDropdown = event.target.closest('.dropdown');
    dropdowns.forEach(function(menu) {
        if (!isDropdown) {
            menu.style.display = 'none';
        }
    });
});

document.querySelectorAll('.dropdown').forEach(function(drop){
    drop.addEventListener('mouseenter', function(){
        this.querySelector('.dropdown-content').style.display = 'block';
    });
    drop.addEventListener('mouseleave', function(){
        this.querySelector('.dropdown-content').style.display = 'none';
    });
}); 

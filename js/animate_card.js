document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements to reduce lookups
    const cardContainers = document.querySelectorAll('.card_container');
    
    // Helper function to toggle card classes
    function toggleCardClasses(card, isActive) {
        const background = card.querySelector('.card_background');
        const content = card.querySelector('.card_content');
        
        if (isActive) {
            background.classList.add('card_background_hover');
            content.classList.add('card_content_visible');
        } else {
            background.classList.remove('card_background_hover');
            content.classList.remove('card_content_visible');
        }
    }
    
    // Desktop events (mouse)
    cardContainers.forEach(card => {
        card.addEventListener('mouseenter', () => toggleCardClasses(card, true));
        card.addEventListener('mouseleave', () => toggleCardClasses(card, false));
    });
    
    // Mobile events (touch)
    let touchStartY = 0;
    let touchedCard = null;
    const touchThreshold = 10; // Threshold in pixels to determine if it's a scroll or tap
    
    // Handle touch start
    cardContainers.forEach(card => {
        card.addEventListener('touchstart', (e) => {
            // Store the starting Y position
            touchStartY = e.touches[0].clientY;
            touchedCard = card;
            
            // Don't prevent default here - this allows normal scrolling
        });
    });
    
    // Handle touch end - only trigger card animation if it was a tap, not a scroll
    document.addEventListener('touchend', (e) => {
        if (!touchedCard) return;
        
        // Check if it's been a significant vertical scroll
        const touchEndY = e.changedTouches[0].clientY;
        const verticalDiff = Math.abs(touchEndY - touchStartY);
        
        // If minimal movement (a tap, not a scroll)
        if (verticalDiff < touchThreshold) {
            // Check if card is already active
            const isCardActive = touchedCard.querySelector('.card_content').classList.contains('card_content_visible');
            
            if (isCardActive) {
                // If card is already active, treat as a click to go to the link
                const link = touchedCard.querySelector('.card_content');
                if (link && link.href) {
                    window.location.href = link.href;
                }
            } else {
                // First tap - just show card info
                toggleCardClasses(touchedCard, true);
                
                // Prevent the click event to avoid navigating
                e.preventDefault();
            }
        } else {
            // It was a scroll, hide card info
            toggleCardClasses(touchedCard, false);
        }
        
        touchedCard = null;
    });
    
    // Hide all card animations when scrolling
    document.addEventListener('touchmove', (e) => {
        // Check if significant movement has occurred
        const touchMoveY = e.touches[0].clientY;
        const verticalDiff = Math.abs(touchMoveY - touchStartY);
        
        if (verticalDiff > touchThreshold) {
            // Hide the current touched card if we're scrolling
            if (touchedCard) {
                toggleCardClasses(touchedCard, false);
            }
            
            // Hide all cards when scrolling
            cardContainers.forEach(card => {
                toggleCardClasses(card, false);
            });
        }
    });
});
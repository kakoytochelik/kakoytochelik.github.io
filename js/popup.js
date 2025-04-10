document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const profile = document.querySelector('.profile');
    const popupClose = document.querySelector('.popup_close');
    const infoSection = document.querySelector('.info');
    const nav = document.querySelector('nav');
    const cards = document.querySelector('.cards');
    const aboutMe = document.querySelector('.about_me');
    const aboutMeContainer = document.querySelector('.about_me .container');
    const aboutMeRow = document.querySelector('.about_me .container .row');
    
    
    function openAboutPopup() {

        aboutMeRow.scrollTop = 0;
        
        aboutMeContainer.style.opacity = '1';
        
        document.body.classList.add('body_stop_scroll');
        infoSection.classList.add('info_display');
        
        setTimeout(() => {
            nav.classList.add('background_blur');
            nav.classList.remove('nav_blur');
            cards.classList.add('background_blur');
            aboutMe.classList.add('about_me_popup');
            
            aboutMeRow.style.display = 'none';
            void aboutMeRow.offsetHeight; 
            aboutMeRow.style.display = '';
            
            aboutMeRow.scrollTop = 0;
            
            setTimeout(() => {
                aboutMeRow.style.overflow = 'visible';
                setTimeout(() => {
                    aboutMeRow.style.overflow = 'auto';
                    aboutMeRow.scrollTop = 0;
                }, 50);
            }, 500); 
        }, 10);
        
    }
    
    function closeAboutPopup() {
        document.body.classList.remove('body_stop_scroll');
        nav.classList.remove('background_blur');
        nav.classList.add('nav_blur');
        cards.classList.remove('background_blur');
        aboutMe.classList.remove('about_me_popup');
        
        setTimeout(() => {
            aboutMeRow.scrollTop = 0;
        }, 100);
        
        setTimeout(() => {
            infoSection.classList.remove('info_display');
            
            setTimeout(() => {
                aboutMeRow.scrollTop = 0;
            }, 100);
        }, 400);
        
    }
    
    profile.addEventListener('click', openAboutPopup);
    popupClose.addEventListener('click', closeAboutPopup);
    
    infoSection.addEventListener('click', (e) => {
        if (e.target === infoSection) {
            closeAboutPopup();
        }
    });
    
    window.addEventListener('resize', () => {
        if (infoSection.classList.contains('info_display')) {
            aboutMeRow.style.overflow = 'visible';
            setTimeout(() => {
                aboutMeRow.style.overflow = 'auto';
            }, 50);
        }
    });
});
document.documentElement.classList.add('no-transitions');

window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.remove('no-transitions');
  }, 100);
})



document.addEventListener('DOMContentLoaded', () => {
    const githubLink = document.querySelector('.github_link');
    const profile = document.querySelector('.profile');
    const links = document.querySelector('.links');
    
    function handleGithubEnter() {
        links.classList.remove('profile-hover');
        links.classList.add('github-hover');
    }
    
    function handleProfileEnter() {
        links.classList.remove('github-hover');
        links.classList.add('profile-hover');
    }
    
    function handleLinksLeave(e) {
        if (!e.relatedTarget || !links.contains(e.relatedTarget)) {
            links.classList.remove('github-hover', 'profile-hover');
        }
    }
    
    githubLink.addEventListener('mouseenter', handleGithubEnter);
    
    profile.addEventListener('mouseenter', handleProfileEnter);
    
    links.addEventListener('mouseleave', handleLinksLeave);
    
    const githubText = githubLink.querySelector('.hover-text');
    const profileText = profile.querySelector('.hover-text');
    
    githubText.addEventListener('mouseenter', (e) => {
        links.classList.add('github-hover');
        links.classList.remove('profile-hover');
    });
    
    profileText.addEventListener('mouseenter', (e) => {
        links.classList.add('profile-hover');
        links.classList.remove('github-hover');
    });
});
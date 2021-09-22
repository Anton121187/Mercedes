const menuLinks = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...menuLinks, mainScroll];

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const sectionID = event.target.getAttribute('href').substr(1);

        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
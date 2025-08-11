document.addEventListener("DOMContentLoaded", () => {
    console.log("e")
    let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", () => {
        let currentScrollPos = window.pageYOffset;
        let nav = document.getElementById('topNav');
        let rect = document.getElementById('topNav').getBoundingClientRect();
        
        // user has scrolled up
        if (prevScrollPos > currentScrollPos) {
            nav.style.transform = 'translateY(0px)';
            if ( Number(rect.top.toFixed() > 0 )) {
                nav.style.transform = 'translateY(0px)'
            }
        }
        
        if (currentScrollPos >= 665) {
            // user has scrolled down
            if (prevScrollPos < currentScrollPos) {
                nav.style.transform = 'translateY(-70px)';
            }
            if ( Number(rect.top.toFixed() < -70 )) {
                nav.style.transform = 'translateY(-70px)'
            }
        }
        // update previous scroll position
        prevScrollPos = currentScrollPos;
    }); 
});
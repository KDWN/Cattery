function hamClick(menu) {
    let nav = document.getElementById("topNav");
    let icon0 = menu.childNodes[1];
    let icon1 = menu.childNodes[3];
    let icon2 = menu.childNodes[5];
    if (nav.classList.contains("open")){
        icon1.style.transform = '';
        icon0.style.transform = '';
        icon2.style.transform = '';
        nav.classList.remove("open");
    }
    else {
        icon1.style.transform = 'translate(-120px) scale(0.9)';
        icon0.style.transform = 'translate(0, 127.5%) rotate(45deg) scale(0.8)';
        icon2.style.transform = 'translate(0, -127.5%) rotate(-45deg) scale(0.8)';
        nav.classList.add("open");
    }
}



document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");
    document.querySelector("#hamBtn").addEventListener( "click", function() {
        console.log("clicked")
        hamClick(this);
    });
});
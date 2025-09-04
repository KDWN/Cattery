function collapse(button) {
    let term = button.parentNode;
    let content = term.childNodes[3];
    let bars = button.childNodes[3];
    let bar1 = bars.childNodes[1];
    let shifts = window.getComputedStyle(bar1).transform.match(/matrix\(([^)]+)\)/)[1].split(',');
    let barRot = (Math.atan2(Number(shifts[2]), Number(shifts[3]))*180) / Math.PI;
    bar1.style.transform = `translate(16px, 0) rotate(${Math.round((90+barRot) / 90) * 90}deg)`
    content.classList.toggle("hide");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".collapse").forEach(button => {
        button.addEventListener("click", function() {
            collapse(this);
        });        
    });
});
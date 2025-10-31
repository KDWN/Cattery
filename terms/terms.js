// hides/shows the section that the user clicked on
function collapse(button) {
    // gets relevant html elements
    let term = button.parentNode;
    let content = term.childNodes[3];
    let bars = button.childNodes[3];
    let bar1 = bars.childNodes[1];

    // calculates the rotation of the second half of the plus symbol
    let shifts = window.getComputedStyle(bar1).transform.match(/matrix\(([^)]+)\)/)[1].split(',');
    let barRot = (Math.atan2(Number(shifts[2]), Number(shifts[3]))*180) / Math.PI;

    // shifts the plus symbol into the minus symbol and vice versa
    bar1.style.transform = `translate(16px, 0) rotate(${Math.round((90+barRot) / 90) * 90}deg)`

    // changes the state of the conent between visible and not
    content.classList.toggle("hide");
}

// once the pages is loaded, adds checks for user input to run the function above
$(document).ready(function() {
    $(".collapse").on("click", function() {
        collapse(this);
    });
});
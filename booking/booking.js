function checkdate() {
    // getting the input boxes
    let start = document.getElementById("startDate");
    let end = document.getElementById("endDate");

    // getting all relevant dates
    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    endDate.setHours(0, 0, 0, 0);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // checks if they have a start date before checking if they have given enough warning
    if (start.value != ""){
        if(startDate.getFullYear() > currentDate.getFullYear()) {} else {
            if(startDate.getMonth() > currentDate.getMonth()) {} else {
                if(startDate.getDate() <= currentDate.getDate()+1){
                    start.value = "";
                    alert("We need at least 2 days warning");
                }
            }
        }
    }
    // checks if both dates have been input before checking if they have tried to apply for their cat(s) to stay a negative amount of time
    if (end.value != "" && start.value != ""){
        if(endDate.getFullYear() > startDate.getFullYear()) {} else {
            if(endDate.getMonth() > startDate.getMonth()) {} else {
                if(endDate.getDate() <= startDate.getDate()) {
                    end.value = "";
                    alert("End date must be after start date")
                }
            }
        }
    }
}

//once the page is loaded, adds checks for when the user changes the dates to run the function above
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#startDate").addEventListener("change", () => {
        checkdate()
    });
    document.querySelector("#endDate").addEventListener("change", () => {
        checkdate()
    });
    // document.querySelector("form").addEventListener("submit", (input) => {
    //     input.preventDefault();

    //     let captchaResponse = grecaptcha.getResponse();

    //     if (!captchaResponse > 0){
    //         throw new Error("captcha not complete");
    //     }

    //     let bookingData = new FormData(input.target);
    //     let params = new URLSearchParams(bookingData);

    //     fetch("https://formsubmit.co/your@email.com", {
    //         method: "POST",
    //         body: params,
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))
    // });
});
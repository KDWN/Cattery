function checkdate() {
    // getting the input boxes
    let start = document.getElementById("startDate");
    let end = document.getElementById("endDate");

    // getting all relevant dates
    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    let currentDate = new Date

    // checks if they have a start date before checking if they have given enough warning
    if (start.value != ""){
        if(startDate <= currentDate){
            start.value = "";
            alert("We need at least 1 days warning");
        }
    }
    // checks if both dates have been input before checking if they have tried to apply for their cat(s) to stay a negative amount of time
    if (end.value != "" && start.value != ""){
        if(end.value < start.value) {
            end.value = "";
            alert("End date must be after start date")
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
});
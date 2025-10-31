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
            if(currentDate.getMonth() < startDate.getMonth()) {
                start.value = "";
                alert("End date must be after start date")
            }
        }
        if(currentDate.getFullYear() < startDate.getFullYear()) {
            start.value = "";
            alert("End date must be after start date")
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
            if(endDate.getMonth() < startDate.getMonth()) {
                end.value = "";
                alert("End date must be after start date")
            }
        }
        if(endDate.getFullYear() < startDate.getFullYear()) {
            end.value = "";
            alert("End date must be after start date")
        }
    }
}

//once the page is loaded, adds checks for when the user changes the dates to run the function above
$(document).ready( () => {
    $("#startDate").on("change", () => {
        checkdate()
    });
    $("#endDate").on("change", () => {
        checkdate()
    });
});
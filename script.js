window.onload = function() {
    // Start date: February 26, 2023
    var startDate = new Date('2023-02-26T15:00:00');

    // Function to calculate and update the time difference
    function updateTimeDifference() {
        // Current date and time
        var currentDate = new Date();
        
        // Calculate the time difference
        var timeDifference = currentDate - startDate;
        
        // Calculate years, months, days, hours, minutes, and seconds
        var secondsDifference = Math.floor(timeDifference / 1000);
        var minutesDifference = Math.floor(secondsDifference / 60);
        var hoursDifference = Math.floor(minutesDifference / 60);
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days directly
        var monthsDifference = Math.floor(daysDifference / 30.4375); // Average month length
        var yearsDifference = Math.floor(monthsDifference / 12);

        // Adjust values
        secondsDifference %= 60;
        minutesDifference %= 60;
        hoursDifference %= 24;
        daysDifference %= 30.4375; // Average month length
        monthsDifference %= 12;
        daysDifference = Math.trunc(daysDifference)

        // Create the message
        var message = "Hey Gaëlle, it's been\n\n";
        message += yearsDifference > 0 ? yearsDifference + " " + (yearsDifference === 1 ? "year" : "years") + ", " : "";
        message += monthsDifference > 0 ? monthsDifference + " " + (monthsDifference === 1 ? "month" : "months") + ", " : "";
        message += daysDifference + " " + (daysDifference === 1 ? "day" : "days") + ", ";
        message += hoursDifference + " " + (hoursDifference === 1 ? "hour" : "hours") + ", ";
        message += minutesDifference + " " + (minutesDifference === 1 ? "minute" : "minutes") + ", and ";
        message += secondsDifference + " " + (secondsDifference === 1 ? "second\n\n" : "seconds\n\n");
        message += " since we first met, and you have fucking changed my life!\n\n Much love\n xoxo\n Aishi";
        
        // Display the message
        document.getElementById('message').innerText = message;
    }

    // Call updateTimeDifference function initially to display message immediately
    updateTimeDifference();

    // Call updateTimeDifference function every second
    setInterval(updateTimeDifference, 1000);
}


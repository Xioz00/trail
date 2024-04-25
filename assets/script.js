document.addEventListener("DOMContentLoaded", function() {
    var rabbit = document.getElementById("rabbit");

    // Check if the rabbit element exists
    if (rabbit) {
        // Update the position of the rabbit whenever the mouse moves
        document.addEventListener("mousemove", function(event) {
            rabbit.style.left = event.clientX - rabbit.offsetWidth / 2 + "px";
            rabbit.style.top = event.clientY - rabbit.offsetHeight / 2 + "px";
        });
    } else {
        console.error("The rabbit element is not found.");
    }
});

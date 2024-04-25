document.addEventListener("DOMContentLoaded", function() {
    var leftEye = document.getElementById("left-eye");
    var rightEye = document.getElementById("right-eye");

    document.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        var leftEyeRect = leftEye.getBoundingClientRect();
        var rightEyeRect = rightEye.getBoundingClientRect();

        var leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
        var leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

        var rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
        var rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

        var deltaXLeft = mouseX - leftEyeCenterX;
        var deltaYLeft = mouseY - leftEyeCenterY;

        var deltaXRight = mouseX - rightEyeCenterX;
        var deltaYRight = mouseY - rightEyeCenterY;

        var angleLeft = Math.atan2(deltaYLeft, deltaXLeft);
        var angleRight = Math.atan2(deltaYRight, deltaXRight);

        leftEye.style.transform = "translate(-50%, -50%) rotate(" + angleLeft + "rad)";
        rightEye.style.transform = "translate(-50%, -50%) rotate(" + angleRight + "rad)";
    });
});

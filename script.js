document.addEventListener("DOMContentLoaded", function() {
    function updateCurrentTimeUTC() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.querySelector("[data-testid='currentTimeUTC']").textContent = `Current Time (UTC): ${utcTime}`;
    }
    
    // Update time every second
    setInterval(updateCurrentTimeUTC, 1000);
    updateCurrentTimeUTC();
});

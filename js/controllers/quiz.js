displayTimerOnScroll();

/**
 * Manipula o timer em smartphone
 */
function displayTimerOnScroll() {
    let mq = window.matchMedia("all and (max-width: 767px)");

    if (mq.matches) {
        document.addEventListener("scroll", scrollHandler);
    }

    mq.addListener(function (changed) {
        if (changed.matches) {
            document.addEventListener("scroll", scrollHandler);
        } else {
            document.removeEventListener("scroll", scrollHandler);

            let timerWrapper = document.getElementById("tatu-timer-wrapper");
            timerWrapper.className = "";
        }
    });

    function scrollHandler() {
        let timerWrapper = document.getElementById("tatu-timer-wrapper");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            timerWrapper.className = "tatu-timer-fixed d-flex justify-content-center align-items-center rounded";

            let timer = document.getElementById("tatu-question-timer");
            timer.className = "mb-0";
        } else {
            timerWrapper.className = "";
        }
    };
};
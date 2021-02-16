function events_dialog(input) {
    document.getElementsByClassName('events-dialogue-container')[0].style.top = window.pageYOffset + 'px'
    document.getElementsByClassName('events-dialogue-container')[0].style.display = 'flex'
    disableScroll()
}
function close_events() {
    document.getElementsByClassName('events-dialogue-container')[0].style.display = 'none'
    enableScroll()
}


function disableScroll() {
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
} 
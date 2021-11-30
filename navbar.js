// Side Nav Controller
let expand_side_nav = () => {
    let sidenav_wrapper = document.getElementsByClassName("sidenav-wrapping-container")[0];
    let sidenav = document.getElementsByClassName("sidenav-container")[0];

    sidenav_wrapper.style.width = "100%";
    sidenav_wrapper.style.transition = "all 0.5s";
    sidenav.style.width = "90%";
    sidenav.style.transition = "all 0.7s";
}

// Side Nav Controller
let collapse_side_nav = () => {
    let sidenav_wrapper = document.getElementsByClassName("sidenav-wrapping-container")[0];
    let sidenav = document.getElementsByClassName("sidenav-container")[0];

    sidenav_wrapper.style.width = "0%";
    sidenav_wrapper.style.transition = "all 0.7s";
    sidenav.style.width = "0%";
    sidenav.style.transition = "all 0.5s";
}

// Redirect Image Click to home page
let redirectHomePage = () => {
    window.open("/", "_self");
}
$(function() {
    console.log('sanity check!');

    // Collapses sidebar navigation when hamburger menu icon is clicked
    $(".button-collapse").sideNav();

    // Parallax Effect
    $('.parallax').parallax();

    $('.modal-trigger').leanModal();
});

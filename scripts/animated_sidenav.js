$(".nav-link-container-mobile").on("click", function () {
    $(".nav-link-container-desktop")[0].style.display = "flex";
    $(".sidenav-exit-icon")[0].style.display = "block";
})

$(".sidenav-exit-icon").on("click", function () {
    $(".nav-link-container-desktop")[0].style.display = "none";
    $(".sidenav-exit-icon")[0].style.display = "none";
})
// initialize the map
function initMap() {
    // location
    const jabavu_lane = {
        lat: -1.293660340910008,
        lng: 36.79721992973873,
    };

    const map = new google.maps.Map(document.getElementById("maps"), {
        zoom: 15,
        center: jabavu_lane,
    });

    // marker position
    const marker = new google.maps.Marker({
        position: jabavu_lane,
        map: map,
    });
}

window.addEventListener("DOMContentLoaded", (e) => {
    const menu_bars = document.querySelector(".navbar-toggler");

    menu_bars.addEventListener("click", (e) => {
        if (
            menu_bars.childNodes[1].getAttribute("src") ===
            "images/svg/bars-solid.svg"
        ) {
            menu_bars.childNodes[1].setAttribute(
                "src",
                "images/svg/close_delete_icon.svg"
            );
        } else {
            menu_bars.childNodes[1].setAttribute(
                "src",
                "images/svg/bars-solid.svg"
            );
        }
    });
});

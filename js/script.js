let nightModeClick = 0;

function myFunction() {
    nightModeClick += 1;
    const ele = document.getElementById("navbar");
    const wrapper = document.getElementById("sidebar-wrapper");
    if (nightModeClick % 2 === 0) {
        wrapper.style.backgroundColor = "#067cb5";
        wrapper.style.color = "black";
        ele.style.backgroundColor = "";
        document.body.style.backgroundColor = "white";
    }
    if (nightModeClick % 2 === 1) {
        wrapper.style.backgroundColor = "black";
        wrapper.style.color = "white";
        ele.style.backgroundColor = "black";
        ele.style.color = "white";
        document.body.style.backgroundColor = "black";
    }

}

let clicked = 0;

function showSideMenu() {
    const sidebar = document.getElementById("sidebar-wrapper");
    clicked = clicked + 1;
    console.log(clicked);

    if (clicked % 2 !== 0) {
        console.log("HODKJENDK");
        sidebar.style.display = "inline-flex";
    }
    if (clicked % 2 === 0) {
        sidebar.style.display = "none";
    }
}


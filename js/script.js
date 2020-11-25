let nightModeClick = 0;

function myFunction() {
    nightModeClick += 1;
    const ele = document.getElementById("navbar");
    const wrapper = document.getElementById("sidebar-wrapper");
    var image = document.getElementsByClassName("navbar-toggler");
    const cancel = document.getElementById("cancell");
    const home = document.getElementById("home");
    const reg = document.getElementById("register");
    const login = document.getElementById("login");
    const data = document.getElementById("data");

    if (nightModeClick % 2 === 0) {
        wrapper.style.backgroundColor = "#067cb5";
        wrapper.style.color = "black";
        ele.style.backgroundColor = "";
        document.body.style.backgroundColor = "white";
        home.style.backgroundColor = "rgb(231, 239, 248)";
        data.style.backgroundColor = "rgb(231, 239, 248)";
        reg.style.backgroundColor = "rgb(231, 239, 248)";
        login.style.backgroundColor = "rgb(231, 239, 248)";
        home.style.color = "#006aaa";
        reg.style.color = "#006aaa";
        login.style.color = "#006aaa";
        data.style.color = "#006aaa";
        image.style.visibility = "hidden";
        image.src= "../resources/cancell.png";
        cancel.style.visibility = "hidden";
    }
    if (nightModeClick % 2 === 1) {
        wrapper.style.backgroundColor = "black";
        wrapper.style.color = "white";
        ele.style.backgroundColor = "black";
        home.style.backgroundColor = "black";
        data.style.backgroundColor = "black";
        reg.style.backgroundColor = "black";
        login.style.backgroundColor = "black";
        home.style.color = "white";
        reg.style.color = "white";
        login.style.color = "white";
        data.style.color = "white";
        ele.style.color = "white";
        document.body.style.backgroundColor = "black";
        image.src = "../resources/cancell.png";
        cancel.style.visibility = "visible";
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


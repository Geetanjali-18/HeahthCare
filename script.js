// Menu
let menum = document.getElementById("menu");
let menuList = document.querySelector(".nav-list");
menum.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menum.classList.contains("open")) {
        menum.classList.replace("open", "close");
    }
    else {
        menum.classList.replace("close", "open");
    }
});
let remove = () => {
    if (window.innerWidth <= 800) {
        menuList.classList.toggle("show");
    }
    menu.classList.replace("close", "open");
};
localStorage.clear();
let i = 1, j = 2, k = 3;
let addData = () => {
    let titleTxt = document.getElementById("title");
    let messageTxt = document.getElementById("message");
    let nmTxt = document.getElementById("name");
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(i, titleTxt.value);
        localStorage.setItem(j, messageTxt.value);
        localStorage.setItem(k, nmTxt.value);
        i += 3;
        j += 3;
        k += 3;
    }
    else {
        alert("Sorry, your browser does not support Web Storage !!");
    }
    titleTxt.value = messageTxt.value = nmTxt.value = "";
};

let valArr = {"Paytm": "98xxxxxxx0@paytm", "PhonePe": "elvesxxxxx@ybi", "Google Pay": "123456789@hdfcbank"};
let showDetails = (val) => {
    document.querySelector("#donate fieldset .app-img img").src = `${val}.svg`;
    document.querySelector("#donate fieldset .account-data h6").textContent = valArr[val];
};

document.querySelector("#donate .redirect-btn").addEventListener("click", () => {
    document.querySelector("#donate .donate-bx").classList.toggle("visible");
    document.querySelector("#donate .redirect-btn").classList.toggle("hidden");
});
document.querySelector("#donate .done-btn").addEventListener("click", () => {
    document.querySelector("#donate .donate-bx").classList.toggle("visible");
    document.querySelector("#donate .redirect-btn").classList.toggle("hidden");
});

function display(val) {
            document.getElementById(`${val}`).style.display = "block";
        }




 
 
 
 
        // CHAT bot
 
 
        




        //CHAT BOT
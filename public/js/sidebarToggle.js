const navBar = document.querySelector("nav")
const sideBarsToggle = document.querySelector(".sidebar-toggle")

sideBarsToggle.addEventListener("click", () => {
    navBar.classList.toggle("close")
    if(sideBarsToggle.classList.contains("close")){
        localStorage.setItem("status", "close")
    }else{
        localStorage.setItem("status", "open")
    }
})
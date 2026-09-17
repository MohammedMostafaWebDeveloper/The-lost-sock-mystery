window.addEventListener("click", (e) => {
    if (event.target == document.querySelector("#menu") || event.target == document.querySelector("#menu img")) {
        return
    }
    if (document.querySelector("#nav-buttons").classList.contains("shown")) {
        document.querySelector("#nav-buttons").classList.remove("shown")
    }
})
function showNav() {
    document.querySelector("#nav-buttons").classList.add("shown")
}

window.addEventListener("scroll", () => {
    var sections = document.querySelectorAll(".section")
    sections.forEach(section => {
        checkSection(section)
    })
})
window.addEventListener("load", () => {
    var sections = document.querySelectorAll(".section")
    sections.forEach(section => {
        checkSection(section)
    })
})

function checkSection(element) {
    var targetHeight = innerHeight / 2
    if (element.getBoundingClientRect().top < targetHeight) {
        element.style.opacity = "1"
        if (element.querySelector("img")) {
            element.querySelector("img").style.transform = "translateY(0px)"
        }
    }
}
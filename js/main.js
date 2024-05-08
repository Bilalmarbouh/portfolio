let bar = document.getElementById("bar")
let nav = document.getElementById("nv")

bar.addEventListener("click", function () {
    nav.classList.toggle("active")
})

// set animation 
let section = document.querySelectorAll("section")

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset - 600 + height + 300) {
            sec.classList.add("show-animate")
        }
    })
}


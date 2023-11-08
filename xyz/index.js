var elem = document.querySelectorAll(".ele");

elem.forEach((val)=>{
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0;
    });
})

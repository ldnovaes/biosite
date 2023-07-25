
const botaoToggle = document.querySelector("#switch");
const html = document.documentElement;

botaoToggle.addEventListener("click", () => {
    if (html.classList.contains("light")) {
        html.classList.remove("light"); 
    } else {
        html.classList.add("light");
    }
})

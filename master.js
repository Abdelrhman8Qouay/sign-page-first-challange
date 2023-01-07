
const content = document.querySelector(".container");
let btnChange = document.querySelectorAll(".change-to");

let imgMain = document.querySelector(".img_sign img");

btnChange.forEach(btn => {
    btn.addEventListener("click", () => {
        content.classList.toggle("in");
        if (content.classList.contains("in")) {
            document.title = "| Sign In Content |"
            imgMain.src = "https://i.gifer.com/5J46.gif";
        } else {
            document.title = "| Sign Up Content |"
            imgMain.src = "https://static.vecteezy.com/system/resources/previews/002/868/086/original/space-background-illustration-for-explore-in-outer-space-vector.jpg";
        }
    })
})
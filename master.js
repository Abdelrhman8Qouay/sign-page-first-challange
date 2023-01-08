
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
            imgMain.src = "https://64.media.tumblr.com/9129bd384b7e0ecf6fd5d3b9070e2d3e/2dfdaa3dd905833e-d1/s1280x1920/75009ef3c3fbaee6d770259038122e13786294a9.png";
        }
    })
})
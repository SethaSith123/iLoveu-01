const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector("#btnYes")
const noBtn = document.querySelector("#btnNo")

yesBtn.addEventListener("click", ()=> {
    
    question.innerHTML = "I love you Too!";
    gif.src= "/Img/Tkthao219 Tonton Sticker - Tkthao219 Tonton Friends - Discover & Share GIFs.gif"
});


noBtn.addEventListener("click", ()=> {

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

})

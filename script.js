const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener('mouseover', ()=> {
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const maxX = window.innerWidth - yesBtnRect.width;
    const maxY = window.innerHeight - yesBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    yesBtn.style.left = randomX + 'px';
    yesBtn.style.top = randomY + 'px';
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "yea prolly not";
    gif.src = "https://media4.giphy.com/media/aTXHpCN7TSpmE/200.gif";
});
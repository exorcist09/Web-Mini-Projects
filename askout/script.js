const play=()=>{
    var audio = document.getElementById("audio")
    audio.play();
}

const question =document.querySelector(".question");
const yesBtn =document.querySelector(".yesbutton");
const noBtn =document.querySelector(".nobutton");
const wrapper =document.querySelector(".wrapper");

const wrapperRect =wrapper.getBoundingClientRect();
const noBtnRect=noBtn.getBoundingClientRect();

yesBtn.addEventListener("click",()=>{
    question.innerHTML="YES YES YES...";
});

noBtn.addEventListener("mouseover",()=>{
    const i= Math.floor(Math.random()*(wrapperRect.width - noBtnRect.width))+1;

    const j= Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height))+1;

    noBtn.style.left =i+"px";
    noBtn.style.top = j+"px";

})
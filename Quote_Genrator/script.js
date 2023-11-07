const btn =document.querySelector("#new-quote");
const quote =document.querySelector(".quote ");
const person =document.querySelector(".person");

const quotes=[{quote:"Life is a sleazy stranger, who looks vaguely familiar; flirting with a bimbo named disaster at the end of the bar",person:"Ani DiFranco"},
{quote:"Life has no limitations except the ones you make",person:"Les Brown"},
{quote:"I have a theory that the answers to all of lifes major questions can found in a John Mayer song",person:"Susane Colasanti"},
{quote:"Life is about not knowing, having to change, taking a moment and making the best of it.",person:"Gilda Radner"},
{quote:"Its the only real advantage to getting older. You get to say what you mean and stop apologizing",person:"Jill A. Davis"},
{quote:"you go ded",person:"Adarsh-the-exorcist"}]


btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML =quotes[random].person; 
})
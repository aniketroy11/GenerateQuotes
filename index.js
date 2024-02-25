const content = document.querySelector('.quote');
const autherName = document.querySelector('.autherName');
const next = document.querySelector('.nextButton');
const twitter = document.querySelector('.button');

const url = "https://api.quotable.io/random";
const twitte_api = "https://twitter.com/?lang=en-in";

async function getQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();
    content.innerHTML = data.content;
    autherName.innerHTML = data.author;

}

twitter.addEventListener('click', function () {
    window.open('https://twitter.com/intent/tweet?text=' + content.innerHTML + "---by " + autherName.innerHTML, 'Tweet Window', " width=600 , height=300");

})
window.onload = getQuotes(url);

next.addEventListener('click', function () {
    getQuotes(url);
})





















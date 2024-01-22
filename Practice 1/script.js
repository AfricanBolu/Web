function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};

const btn1 = document.getElementById("btn-1");
btn1.onclick = showMeme;

const btn2 = document.getElementById("btn-2");
btn2.onclick = showJoke;

const btn3 = document.getElementById("btn-3");
btn3.onclick = showQuote;

const btn4 = document.getElementById("btn-4");
btn4.onclick = showRiddle;

const btn5 = document.getElementById("btn-5");
btn5.onclick = revealAnswers;
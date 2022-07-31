let music = new Audio("music.mp3");
music.play();
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
const boxes = Array.from(document.getElementsByClassName("box"));
const spanText = console.log(boxes);
const turnfor = document.querySelector(".info");
const reset = document.querySelector("#reset");
const imgGif = document.querySelector(".imgGif");
let isgameover = false;
const changeTurn = function () {
  return turn == "X" ? "0" : "X";
};
const checkwin = function () {
  let boxtext = document.querySelectorAll(".boxtext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText == boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      turnfor.innerText = boxtext[e[0]].innerText + " has won";
      console.log(boxtext[e[0]].innerText);
      isgameover = true;
      music.pause();
      gameover.play();
      imgGif.style.display = "block";
    }
  });
};
const checkDraw = function () {
  let boxtext = document.querySelectorAll(".boxtext");
  let c = 0;
  boxtext.forEach((e) => {
    if (e.innerText == "X" || e.innerText == "0") c++;
  });
  console.log(c);
  if (c == 9) {
    isgameover = true;
    music.pause();
    gameover.play();
    turnfor.innerText = "Match Draw";
  }
};
boxes.forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", function () {
    console.log("clicked");
    if (boxText.innerText == "") {
      boxText.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkwin();
      if (!isgameover) {
        turnfor.innerText = "Turn for " + turn;
      }
      checkDraw();
    }
  });
});
reset.addEventListener("click", function () {
  imgGif.style.display = "none";
  music.play();
  turn = "X";
  turnfor.innerText = "Turn for " + turn;
  console.log("Clicked");
  let boxtext = document.querySelectorAll(".boxtext");
  boxtext.forEach((e) => {
    e.innerText = "";
  });
});

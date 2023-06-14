let turnAudio=new Audio('ting.mp3');
const boxes = document.querySelectorAll(".box");
let turn = "X";
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
const text = document.querySelector("#select");
const dancingDog = document.querySelector(".img");
let boxText = Array.from(boxes);  //Array using all the boxes

// Winning possibilities array
const winArray=[
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];
const checkWinner=()=>{
    for(let win of winArray){
        if((boxText[win[0]].innerHTML===boxText[win[1]].innerHTML)&&(boxText[win[1]].innerHTML===boxText[win[2]].innerHTML)&&(boxText[win[0]].innerHTML!=="")){
            if(boxText[win[0]].innerHTML==="X")
            text.innerHTML=`X wins`;
            else
            text.innerHTML=`0 wins`;
            dancingDog.style.display="block";
            return true;
        }
        



    }
    return false;
}


for (let box of boxes) {
  box.addEventListener("click", () => {
    if(box.innerHTML==="" &&!checkWinner()){
    turnAudio.play();
    box.innerHTML = turn;
    if(!checkWinner()){
    turn = changeTurn();
    text.innerHTML = `Turn  For ${turn}`;
    }
    
    }
  });
}
const resetButton=document.querySelector('#reset');
resetButton.addEventListener('click',()=>{
    for(let box of boxes){
        box.innerHTML="";
    }
    dancingDog.style.display="none";
    text.innerHTML=`Turn For X`;
})

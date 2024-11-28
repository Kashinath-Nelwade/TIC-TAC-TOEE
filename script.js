let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newgamebutton = document.querySelector("#new_game_button");
let messagecontainer = document.querySelector(".message_container");
let messagess = document.querySelector("#message")

let turno = true;

const reset = () =>{
    turno = true;
    enablebuttons();
    messagecontainer.classList.add("hide");

}

let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("you are clicked here ....")
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disablebuttons = ()=>{
    for( box of boxes){
        box.disabled = true;
    }
};

const enablebuttons = ()=>{
    for( box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showinner =(winner)=>{
    messagess.innerText = `Congratulations winner is , ${winner}`;
    messagecontainer.classList.remove("hide");
    disablebuttons();

}

const checkwinner = () => {
  for (pattern of arr) {
    
    
     let pos1 =  boxes[pattern[0]].innerText;
     let pos2 =  boxes[pattern[1]].innerText;
     let pos3 =  boxes[pattern[2]].innerText;

     if(pos1 != "" , pos2 != "" , pos3 != ""){
        if(pos1=== pos2 && pos2 === pos3){
            console.log("The  winner is ",pos1);
            showinner(pos1);
        }
     }
    
  }
};

newgamebutton.addEventListener("click",reset);
reset_btn.addEventListener("click" , reset);



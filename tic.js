let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let newGamebtn =document.querySelector( '#new-btn' );
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg") ; 
let person1=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=()=>{
    person1=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        if(person1===true){
            box.innerText ="X";
            person1=false;
        }
        else{
            box.innerText="O";
            person1=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Player ${winner} wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=  boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1==pos2 && pos2==pos3){
                    console.log("Winner...",pos1);
                    showWinner(pos1);
                }
            }
            

    }
}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
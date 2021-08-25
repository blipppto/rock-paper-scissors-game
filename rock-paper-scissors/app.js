let compscore=0;
let userscore=0;
const userscore_span = document.getElementById("userScore");
const compscore_spanb= document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUser = 'user'.fontsize(3).sub();
const smallComp = 'comp'.fontsize(3).sub();


function getcompChoice() {
const compChoice =['r','p','s'];
const  randomChoice = Math.floor(Math.random()*3);
return compChoice[randomChoice];
}

function wordconverter(word){
    if(word=='r'){
        return 'Rock';
    }else if(word=='s'){
        return 'Scissors';
    } else {
        return 'Paper';
    }
}

function win(user, comp) {
    userscore++;
    userscore_span.innerHTML= userscore;
    compscore_spanb.innerHTML = compscore;
    result_p.innerHTML= `${wordconverter(user)} ${'user'.fontsize(3).sub().fontcolor("green")} beats ${wordconverter(comp)}${'comp'.fontsize(3).sub().fontcolor("green")}. You Win!!! `;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 500);
   
    
}

function lose(user, comp){
    compscore++;
    userscore_span.innerHTML= userscore;
    compscore_spanb.innerHTML = compscore;
    result_p.innerHTML= `${wordconverter(user)}${smallUser} loses to ${wordconverter(comp)}${smallComp}. You loose!!! `;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 500);
}

function draw(user, comp){
    userscore_span.innerHTML= userscore;
    compscore_spanb.innerHTML = compscore;
    result_p.innerHTML=  'You both picked '+ wordconverter(comp) + ' Draw!!!';
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')}, 500)
}

function game(userChoice){
    const compchoice= getcompChoice();
    switch (userChoice + compchoice){
        case 'rs':
        case 'sp':
        case 'pr':
          win(userChoice, compchoice);
          break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, compchoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, compchoice);
            break;
    }
   
}



function main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissors_div.addEventListener('click', function(){
    game("s"); 
})

}
main();
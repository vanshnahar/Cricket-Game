let scorestr=localStorage.getItem('score');
let score;
resetscore(scorestr);
       function resetscore(scorestr){
  score= JSON.parse(scorestr)||{
    win: 0,
    lost: 0,
    tie: 0,
};

score.displayscore=function(){
    return  `WIN:${score.win},LOST:${score.lost},TIE:${score.tie}`;
};
showresult();
}

function generateComputerChoice() {
  //This will generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      
        score.win++;
      return 'User won.';
    } else if (computerMove === 'Bat') {
      
        score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Stump') {
      
        score.lost++;
      return 'Computer has won';
    }
  } 
  else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      
        score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Bat') {
      
        score.lost++;
      return 'Computer has won';
    } else if (computerMove === 'Stump') {
      
        score.win++;
      return 'User won.';
    }
  } 
  else {
    if (computerMove === 'Ball') {
      
        score.lost++;
      return 'Computer has won';
    } else if (computerMove === 'Bat') {
      
        score.win++;
      return 'User won.';
    } else if (computerMove === 'Stump') {
    ;
    score.tie++;
      return `It's a tie`;
    }
  }
}

function showresult(compmove,usermove,result){
    localStorage.setItem("score", JSON.stringify(score));

document.querySelector('#user-move').innerHTML=
  usermove ? `You have chosen ${usermove} `:'';
document.querySelector('#computer-move').innerHTML=
  compmove?  `Computer choice is ${compmove} `:'';
document.querySelector('#result').innerHTML=
  result ?`Result: ${result} `:'';
document.querySelector('#score').innerHTML=`Score: ${score.displayscore()}`
}
const rollButton = document.getElementById('rollBtn');
const rollButton2 = document.getElementById('rollBtn2');
const dieOne = document.getElementById('die1');
const dieTwo = document.getElementById('die2');
const pointBox = document.getElementById('pointBox');
const cash = document.getElementById('cash');
const wager = document.getElementById('wager');
let roll = 0;
let point;
let money = 100;
let wagerAmount = 10;

cash.innerHTML = money;
wager.innerHTML = wagerAmount;

wager.addEventListener('click', function(e){
  increaseWager();
  wager.innerHTML = wagerAmount;
  e.preventDefault();
  return wagerAmount;
});

wager.addEventListener('mouseleave', function(e){
  console.log('doubles');
  decreaseWager();
  wager.innerHTML = wagerAmount;
  e.preventDefault();
  return wagerAmount;
})

rollButton.addEventListener('click', function(e){
  comeOutRoll();
  e.preventDefault();
  return point;
});

rollButton2.addEventListener('click', function(e){
  pointRoll();
  e.preventDefault();
});

function increaseWager(){
  wagerAmount+=10;
  wager.innerHTML = wagerAmount;
  return wagerAmount;
}

function decreaseWager(){
  wagerAmount-=10;
  wager.innerHTML = wagerAmount;
  return wagerAmount;
}

function rollOne(){
  r = Math.floor((Math.random() * 6) + 1);
  return r;
};

function comeOutRoll(){
  console.log("************************************")
  console.log("COMIN' OUT!!");
  let point = 0;
  
  x = rollOne();
  y = rollOne();

  dieOne.innerHTML = x;
  dieTwo.innerHTML = y;

  point += x + y;
   
  if (point === 7 || point === 11){
    console.log("SEVEN/ELEVEN! You win!!!");
    pointBox.innerText = 'WINNER?';
    money+=wagerAmount;
    cash.innerHTML = money;
    return money;
  } 
  else if(point === 2 || point === 3 || point === 12) {
    console.log('CRAPS! You LOSE, you LOSER!');
    pointBox.innerText = 'LOSER!';
    money-=wagerAmount;
    cash.innerHTML = money;
    return money;
  }
  else { 
    console.log('Your point is ' + point);
    rollButton.style.display="none";
    rollButton2.style.display="inline-block";
    pointBox.innerText = point;
    sessionStorage.setItem('point', point);
    return point;
  } 
}

function pointRoll(){
    point = sessionStorage.getItem('point')
    roll = 0;
    x = rollOne();
    y = rollOne();

    dieOne.innerHTML = x;
    dieTwo.innerHTML = y;

    console.log(point);

    roll += x + y;
    if (roll == point){
      console.log("ROLL --> " + roll + "! YOU WIN!");
      rollButton2.style.display="none";
      rollButton.style.display="inline-block";
      pointBox.innerText = 'WINNER?';
      money+=wagerAmount;
      cash.innerHTML = money;
      return money;
    } else if (roll === 7){
      console.log("ROLL --> 7 OUT!!");
      rollButton2.style.display="none";
      rollButton.style.display="inline-block";
      pointBox.innerText = 'LOSER!';
      money-=wagerAmount;
      cash.innerHTML = money;
      return money;
    } else {
      console.log("ROLL --> " + roll + "! Roll Again!");
      return;
    }

}









dieOne.innerHTML = roll;
dieTwo.innerHTML = roll;


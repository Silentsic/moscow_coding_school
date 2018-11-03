const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
let winner = document.body

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player==0 && computer==1){
    winner.innerHTML = "<h1>"+"player win"+"</h1>";
}else if (player==1 && computer==2){
    winner.innerHTML = "<h1>"+"player win"+"</h1>";
}else if (player==2 && computer==0){
    winner.innerHTML = "<h1>"+"player win"+"</h1>";
}else if (player==0 && computer==0 || player==1 && computer==1 || player==2 && computer==2){
    winner.innerHTML = "<h1>"+"draw won :)))"+"</h1>";
}else{
    winner.innerHTML = "<h1>"+"computer win"+"</h1>";
}

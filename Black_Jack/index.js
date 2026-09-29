let sum=0
let cards=[]
let isAlive=false 
let isBlackJack=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")
let player={
    name: "Vishaal",
    credit: 145
}

function startGame(){
    cards=[]
    isAlive=true
    isBlackJack=false
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
    let random=Math.floor(Math.random()*13)+1
    if(random===1) return 11
    else if(random>10){
        return 10
    }
    else{
        return random
    }
}
function renderGame(){

    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    if(sum<=20){
    message="Do you want to draw another card ??"
    isAlive=true
    }else if(sum === 21){
    message="Congrats...You have the BlackJack!!!!"
    isBlackJack=true
    player.credit+=30
    }else{
    message="Sorry, You are out of the Game!"
    isAlive=false
    player.credit-=30
    } 
sumEl.textContent="Sum: "+sum
messageEl.textContent=message
playerEl.textContent=player.name+" : "+player.credit
}
function newCard(){
    if(isAlive && !isBlackJack){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
// document.getElementById("count-el").innerText = 5;
let count=0
let countEl=document.getElementById("count-el")//fetches the particular element from the html file
let saveEl=document.getElementById("save-el")
function increment(){
    count+=1
    countEl.textContent=count// with the fetched element..the text is modified
}
function save(){
    let countstr=count+" - "
    saveEl.textContent+=countstr
    countEl.textContent=0
    count=0
    console.log(count)
}
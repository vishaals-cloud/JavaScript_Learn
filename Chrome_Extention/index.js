let myLeads=[]
const inputEl=document.getElementById("input-el") 
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
const letLocalLeads=JSON.parse(localStorage.getItem("myLeads"))


if(letLocalLeads){
    myLeads=letLocalLeads
    render(myLeads)
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow:true},function(tabs){
        if (chrome.runtime.lastError) {
            console.error("Could not save the active tab:", chrome.runtime.lastError.message)
            return
        }

        const activeTab = tabs[0]
        if (!activeTab || !activeTab.url) {
            console.error("Could not save the active tab: its URL is unavailable")
            return
        }

        myLeads.push(activeTab.url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})
inputBtn.addEventListener("click",function(){
    console.log("Button Clicked from event Listener")
    const lead=inputEl.value
    myLeads.push(lead)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
 
}) 
deleteBtn.addEventListener("dblclick",function(){
    console.log("Delete Button is double Clicked")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

function render(leads){
    let listItems=""
    
    for(let i=0;i<leads.length;i++){
        listItems+=`
        <li>
            <a href='${leads[i]}' target='blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listItems
}

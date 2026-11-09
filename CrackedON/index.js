const addBtn=document.querySelector('.btn-add');
const hiddenForm=document.querySelector('.problem-form')
const problemName=document.querySelector('#problem-name')
const platformName=document.querySelector('#platform-name')
const difficulty=document.querySelector('#difficulty-lvl')
const time=document.querySelector('#time-val')
const statusOpt=document.querySelector('#status-opt')
const emptyRow=document.querySelector('.empty-row')
const submitBtn=document.querySelector('.btn-submit')
const LocalList=JSON.parse(localStorage.getItem("MyList"))
const deleteAll=document.querySelector('.btn-delete')
let problemList=[]
if(LocalList){
    problemList=LocalList
    renderData()
}
addBtn.addEventListener('click',function(){
    hiddenForm.hidden=false

})
deleteAll.addEventListener('click',function(){
    problemList=[]
    localStorage.clear()
    renderData()
})
hiddenForm.addEventListener('submit',function(e){
    e.preventDefault()//to prevent the default behavior of form submission which is to reload the page
    const problem = {
    name: problemName.value,
    platform: platformName.value,
    difficulty: difficulty.value,
    timeTaken: time.value,
    status: statusOpt.value
    };
    problemList.push(problem)
    localStorage.setItem("MyList",JSON.stringify(problemList))
    renderData()
    hiddenForm.reset()//to reset the form fields after submission
    hiddenForm.hidden = true;
})
function renderData(){
    let display=''
    if (problemList.length === 0) {
        emptyRow.innerHTML = `
            <tr class="empty-row">
                <td colspan="5">No problems added yet.</td>
            </tr>
        `;
        return;
    }

    for(let i=0;i<problemList.length;i++){
        display+=`
        <tr>
        <td>${problemList[i].name}</td>
        <td>${problemList[i].platform}</td>
        <td>${problemList[i].difficulty}</td>
        <td>${problemList[i].timeTaken}</td>
        <td>${problemList[i].status}</td>
        </tr>`
    }
    emptyRow.innerHTML=display
}

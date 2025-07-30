let TodoArray=[{
  name: 'Watch Youtube',
  dueDate : '08-05-2024'
},
{
  name:'Complete Course',
  dueDate:'08-05-2024'
}];

displayOnPage();

function addingInArray(){
  const name = document.querySelector('.todoInput').value;
  const dueDate =document.querySelector('.dateInput').value;
  TodoArray.push({
    //name:name,
    //dueDate:dueDate,
    name,          //shorthand property if item and value is same
    dueDate
  });
  document.querySelector('.todoInput').value='';
  document.querySelector('.dateInput').value='';
  displayOnPage();
}

function checkEnter(event){
  if(event.key==='Enter'){
    addingInArray();
  }
}

function  displayOnPage(){
  let TodoArrayHTML='';
  TodoArray.forEach((todoObject,index)=>{
    //const todoObject=TodoArray[i];
    //const name = todoObject.name;
    //const dueDate=todoObject.dueDate;
    const {name,dueDate}=todoObject;
    TodoArrayHTML += 
    `<div class="todoList-div">
      <div>${name}</div> <div>${dueDate} </div>
        <button class="delete-button">
         Delete
         </button>
      </div>`;
  })
  for(let i=0; i<TodoArray.length; i++){
    
  }
  document.querySelector('.todoList').innerHTML=TodoArrayHTML;

  document.querySelectorAll('.delete-button').forEach((deleteButton,index) => {
    deleteButton.addEventListener('click', () => {
      TodoArray.splice(index,1); 
      displayOnPage();
    });
  });
}
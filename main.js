
let todos= ["Buy new Bag"];

let input= prompt("Enter Your Choice");

 while(input!== "quit"){
   //Handle Input
  if(input === "list"){
    listTodos();
    } else if(input==="new"){
    //Ask for new Todo
    addTodos();
  }
  else if(input==="delete"){
    deleteTodo();
  }
   //ask again for new input
    input= prompt("What else would you like to do?");
 }
 console.log("You have chosen to end the program");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i +": " + todo);
  });
 console.log("**********");
}

function addTodos(){
  let newTodo= prompt("Add new todo");
  //add to todos Array
      todos.push(newTodo);
      console.log(newTodo +" Added to the list......")
}

function deleteTodo(){
   //Ask for index of item to be deleted
   let choice=prompt("Are you sure you want to delete? Enter \"yes\" if sure, else enter \"no\"");
   if(choice ==="yes"){
    let index= prompt("Please enter index of item to be deleted")
    //delete item
     todos.splice(index,1);
     console.log("Todo Deleted......")
   }
}
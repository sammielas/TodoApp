
let todo= ["Buy Kilishi"];
let input= prompt("Enter Your Choice");

 while(input!== "QUIT"){
  if(input==="LIST"){
    console.log(todo)
  }else if(input==="NEW"){
  let newTodo= prompt("Add new todo");
      todo.push(newTodo);
  }
  
    input= prompt("Enter Your Choice");
  
 }
 console.log("You have chosen to end the program");



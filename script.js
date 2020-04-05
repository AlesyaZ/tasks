let push = {
    obj: 'Hello',
    user: {
    name1: 'Piter',
    name2: 'Vasya',
    name3: 'Kate'
   },
  
   function_push: function(name) {
  return (this.obj + ', ' + this.user[name]);
   }
  }

  console.log(push.function_push('name2')); // push
  
  with(push) { 
    delete user; 
}  // pop 

 console.log(push); //pop
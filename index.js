function receivesAFunction(callback) {
    callback();
  }
  
  receivesAFunction(function() {
    console.log("This is the callback function!");
  }); 

  function returnsANamedFunction() {
    return function myNamedFunction() {
      console.log('This is a named function');
    };
  }
  

function returnAnAnonymousFunction(){
    return  "before all" 
}
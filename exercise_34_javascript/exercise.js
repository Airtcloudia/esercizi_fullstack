

function printAsyncName (callback, name){
setTimeout(callback, 1000); //eseguo la callback dopo 1 sec 

// Poi stampo il nome dopo due secondi 
setTimeout(function() {
    console.log(name);
  }, 2000);
} 

printAsyncName (() => console.log("Hello"), "Claudia");

  



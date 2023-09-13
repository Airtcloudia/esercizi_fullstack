

function repeatHello(callback){
    setTimeout(callback, 1000);
}

// setTimeout(function() {
//     console.log(callback);
//   }, 1000);
// } 

repeatHello (() => console.log("Hello"));
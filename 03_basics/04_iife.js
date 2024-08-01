// Immediately Invoked Fuction Expressions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('chhagan')
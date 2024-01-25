function exampleFunction(){
    if(true){
        var functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar);//I am a function scoped
}

exampleFunction();
console.log(functionScopedVar);//Error: functionScopedVar is not defined
function exampleFunction() {
  if (true) {
    var functionScopedVar = "I am function-scoped";
    let blockScopedLet = "I am block-scoped";
    const blockScopedConst = "I am constant and block-scoped";
  }
  console.log(functionScopedVar); //I am a function scoped
  console.log(blockScopedLet); //Error: 
  console.log(blockScopedConst); //Error: 
}

exampleFunction();


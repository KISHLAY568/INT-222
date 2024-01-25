function parentFunction(name,callback){
    callback();
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am callbackfunction");
}

parentFunction("Kishlay",randomFunction);
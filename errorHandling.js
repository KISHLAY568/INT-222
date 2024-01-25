try{
    //Code that may throw an error
    throw new error("An error");
}
catch(error){
    //Code to handle the error
    console.log(error.message);
}
finally{
    //Code that will run regardless of whether there was an error 
    console.log("Cleanup code");
}
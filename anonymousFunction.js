
// function parentFunction(name, callback) {
//   setTimeout(callback, 1000);
//   console.log("Hey " + name);
// }



// parentFunction("Kishlay", function(){
//     console.log("Hey I am a callback Function");
// });

const parentFunction=(name, callback)=> {
  setTimeout(callback, 1000);
  console.log("Hey " + name);
}

parentFunction("Kishlay", function () {
  console.log("Hey I am a callback Function");
});



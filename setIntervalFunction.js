const repeatedFunction = () => {
  console.log("Repeated function executed!");
};

const intervalId = setInterval(repeatedFunction, 1000); //Executes every 1 second

setTimeout(() => {
  clearInterval(intervalId); //stop the interval
  console.log("iterval stopped.");
}, 5000);

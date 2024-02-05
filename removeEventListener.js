const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//Event handler
const eventHandler = (arg1, arg2) => {
    console.log('Event occured with arguments:', arg1, arg2);
}

//Add the event handler
myEmitter.on('firstevent', eventHandler);

for (var i = 0; i < 5; i++) {
    myEmitter.emit('firstevent', "Hello", "Hi");
    //Remove the listener after the first  emission
    // if (i == 2) {
    //     myEmitter.removeListener('firstevent', eventHandler);
    // }
    if (i == 2) {
        myEmitter.removeAllListeners('firstevent');
    }
}
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('firstevent', (arg1, arg2) => {
    //Event handler logic
    console.log('Event occured with arguments:', arg1, arg2);
});

myEmitter.once('firstevent', (arg1, arg2) => {
    //Event handler logic
    console.log('This listener will be executed only once.', arg1, arg2);
});
for (let i = 0; i < 5; i++) {
    myEmitter.emit('firstevent', "Hello", "Hi");
}
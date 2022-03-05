const msec = 2000;
const text = 'my first hello world app with docker'

console.log(`prepare to receive \'${text}\' for every ${msec/1000} seconds...`);
console.log('================================================================================');
setInterval( () => {
    console.log(`${new Date().toISOString()}: ${text}`);
}, msec);
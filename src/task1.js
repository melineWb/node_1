const { createInterface } = require('readline');

const reverseStr = (str = '') => {
    str = typeof str === 'string' ? str : str.toString();
    process.stdout.write(`Output: ${str.split('').reverse().join('')}\n`);
};

const task1 = async () => {
    process.stdin.on('data', reverseStr).pipe(process.stdin, { end: false });
};

// Variant #2:

// const task1 = async () => {
//     const rl = createInterface({
//         input: process.stdin,
//     });

//     rl.on('line', reverseStr);

//     rl.on('SIGINT', () => {
//         console.log('Done');
//         rl.close();
//     });
// };

task1();

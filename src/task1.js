const { spawn } = require('child_process');

const reverseStr = (str = '') => {
    str = typeof str === 'string' ? str : str.toString();
    process.stdout.write(`Output: ${str.split('').reverse().join('')}\n`);
};

const task1 = async () => {
    const subProccess = spawn('node');

    subProccess.stdout.pipe(process.stdout, { end: false });

    process.stdin.resume();
    process.stdin.on('data', reverseStr).pipe(subProccess.stdin, { end: false });
};

// const task1 = async () => {
//     const readline = createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     readline.on('line', reverseStr);

//     readline.on('SIGINT', () => {
//         console.log('Done');
//         readline.close();
//     });
// };

task1();

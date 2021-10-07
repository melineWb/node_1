const { pipeline } = require('stream');
const csvtojson = require('csvtojson');
const fs = require('fs');

const task2 = async () => {
    const folder = './csv/';
    const fileCsv = `${folder}nodejs19-hw1-ex2.csv`;
    const newFilename = 'newFile.txt';
    const newFilePath = `${folder}${newFilename}`;

    pipeline(fs.createReadStream(fileCsv), csvtojson(), fs.createWriteStream(newFilePath), (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log(`Finished: ${newFilename} was created`);
        }
    });
};

task2();

const fs = require("fs");

/**
 * Callback function to read filedata
 * @param {Error} error
 * @param {Buffer} filedata
 * @returns void
 */

function readFirstFiveCallback(error,filedata) {
    if(error) {
        console.error(error);
        return;
    }

    const Lines = filedata.toString().split("\n");

    Lines.slice(0,5).forEach((line) => {
        console.log(line);
    })
}

fs.readFile("./mathematics.js",readFirstFiveCallback);
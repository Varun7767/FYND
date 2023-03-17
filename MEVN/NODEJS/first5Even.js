const fs = require("fs").promises;

/**
 * Reads the first five from a file
 */
async function readfisrt5Even()  {
    const file = await fs.readFile("./mathematics.js");

    const line = file.toString().split("\n");

    for (let i=0;i<5;i++) {
        console.log(line[i]);
    }
}

readfisrt5Even();
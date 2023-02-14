const fs = require("fs");

/**
 * @desc
 * Takes filepath and logs the contents.
 * @Params
 * filepath string
 * 
 */
// Unicode Transformation Format
// File is the parameter
function readUTF8File(filepath) {
    // Callback : Choice determining
    // 2 choices : data = success
    // error = failure
    // minimises exception handling
    fs.readFile(filepath,"UTF-8", (date, error) => {
        if(error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
}
// not-existing
//readUTF8File("./abcd.txt");

// Existing
readUTF8File("./task.html");

//File with different encoding. Will read with missing characters
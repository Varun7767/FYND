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
    fs.readFile(filepath,"UTF-8", (date, error) => {
        if(error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
}
readUTF8File("./task.html");
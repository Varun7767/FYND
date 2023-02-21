var alert= require('alert');
function init() 
{  

        var name="SIDDHU"; // name is a local variable created by init 
        function displayName() { 
        alert(name);
    }
    displayName();   
}
init();
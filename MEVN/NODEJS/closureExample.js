/**
 * Three function example that i came across
 */
function OuterScope(){
    const result = [];
    function innerscope(){
        for(let i=0;i<7;i++){
        // This is just storing the execution of the inner function
            result[i] = (function inner(x){
                // additional enclosing context
                return function(){
                    console.log(x);
                };
            })
            (i);
        }
    }
    innerscope();
    for (let i=0;i<7;i++){
        result[i]();
    }
}

OuterScope();

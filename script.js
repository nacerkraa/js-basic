// Factory Function

function createCircle(redeus){
    return {
        redeus,
        drow :
        function drow(){
            console.log('drow function with ' + redeus * redeus);
        }
        
    };
}

const circle = createCircle(2);
circle.drow();

// Constrector Function

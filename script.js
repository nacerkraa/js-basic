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

// Constructor Function

function Circle(redeus){
    this.redeus = redeus;
    this.drow = function(){
        console.log("Drow a circle with: redus of: "+ redeus * redeus );
    }
}

const cir = new Circle(4);

cir.drow();
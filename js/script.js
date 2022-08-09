import backback from "./backback";

const show = ()=>{
    let classmate = new backback("Mike Will",15);
    return <div>{classmate.displayInfo()}</div>
    
}

show();

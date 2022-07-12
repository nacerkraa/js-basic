// Map Method
const adress = {
    street : 'ain lahma',
    city: 'ain mlila',
    country:'algeria' 

};

/* The first method
const srtr = adress.street;
const city = adress.city;
const contry = adress.country
------------------------------
The second method
const {street:str,city} = adress;
*/

const {street:str,city} = adress;
console.log(str,city);
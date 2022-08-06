const car = {
    name : "Audi",
    date: 2015,
    moter:{
        type:"Dezel",
        capacity: "258H",
        serial: 125455
    },
    nmbrOfKiloMereris: 1800,
    asiranse: true,
    sound : (sound = "tout tout!") => {
        return sound
    }
}

console.log(car.sound())

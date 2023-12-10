const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

//console.log(MAth.PI);
//Math.PI = 5
//console.log(Math.PI);

const sandwich = {
    name: 'gravy sandwich',
    price: 350,
    isAvailabel: true
}

// console.log(sandwich)
console.log(Object.getOwnPropertyDescriptor(sandwich, "name"));

// changing my property true   ko false me convert kr deta hai 

// Object.defineProperty(sandwich, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(sandwich, "name"));

for (let [key, value] of Object.entries(sandwich)) {
    console.log(`${key}:${value}`);
}


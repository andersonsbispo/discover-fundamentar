// for...in

let person = {
    name: "Anderson",
    age: 25,
    weight: 60
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}
let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "small",
    bark: function(){
        console.log("Bark!");
    },
};

dog.bark();

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

//objects pass by reference, not value
let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
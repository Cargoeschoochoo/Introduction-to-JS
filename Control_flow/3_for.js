let numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++){
    const elements = numbers [index];
    console.log(elements);   
}

for(const number of numbers){
    console.log(number);   
}

let index = 0;
for(let index = 1; index < 5; index++){
    console.log(numbers[index]);
}
console.log(`index = ${index}`);


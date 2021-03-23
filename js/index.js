// Iteration 1: Names and Input
let hacker1 = 'Patricia';
let hacker2 = 'Tom';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);

} else if(hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
for(let i = 0; i < 1; i++){
    console.log(hacker1.split('').join(' ').toUpperCase(i));
}

for(let i = 0; i < 1; i++){
    console.log(hacker2.split('').join(' ').toUpperCase(i));
}

//print in reverse order
for(let i = hacker1.length - 1; i >= 0; i--){
    process.stdout.write(hacker1[i]);
}
    console.log("");

for(let i = hacker2.length - 1; i >= 0; i--){
    process.stdout.write(hacker2[i]);
}
    console.log(" ");

//alphabetical order
if(hacker1[0] === hacker2[0]){
    console.log("What?! You both have the same name?");

} else if(hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");

} else{
    console.log("The driver's name goes first.");
}
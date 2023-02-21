const arr=['giraffe','tiger','lion'];
const arr2=[1,2,3,4];
arr.push('cheetah');
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');
console.log(fruits);
fruits.findIndex(findFruit('apple'));

fruits.findIndex();

function findFruit(fruit){
    return fruit=="banana";
}

const ages=[6,2,3,4];
ages.findIndex(checkAge);
ages.sort();
ages.reverse();

function checkAge(age){
    return age>3;
}

const cars=["BMW","AUDI"];

const car={type:"FIAT",model:"400",color:"white"};


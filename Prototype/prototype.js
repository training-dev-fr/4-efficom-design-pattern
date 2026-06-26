const arr = [1,2,3];


Array.prototype.forEach2 = function(predicate){
    for(let element of this){
        predicate(element);
    }
}

const arr2 = [4,5,6];

arr2.forEach2(el => console.log(el));
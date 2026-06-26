let item1 = new Item(5);
let item2 = new Item(10);
let item3 = new Item(-3);

let list = new List([item1, item2, item3]);

list.forEach(element => console.log(element.value));
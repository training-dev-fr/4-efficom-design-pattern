import Field from "./Field.js";

export default class Password extends Field {
    constructor(item){
        super(item);
    }

    display(){
        const input = document.createElement('input');
        input.type = "password";
        return super.display(input);
    }

    onChange(callback){
        this.element.querySelector('input').addEventListener('keyup',(e) => {
            callback(e.target.value);
        });
    }
}
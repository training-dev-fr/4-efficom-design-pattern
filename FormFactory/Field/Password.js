export default class Password{
    constructor(item){
        this.label = item.label;
    }

    display(){
        this.element = document.createElement('div');
        this.element.classList.add("form-group");

        const label = document.createElement('label');
        label.innerHTML = this.label;

        this.element.appendChild(label);

        const input = document.createElement('input');
        input.type = "password";

        this.element.appendChild(input);

        return this.element;
    }

    onChange(callback){
        this.element.querySelector('input').addEventListener('keyup',(e) => {
            callback(e.target.value);
        });
    }
}
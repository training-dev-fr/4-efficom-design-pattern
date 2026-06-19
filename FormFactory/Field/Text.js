export default class Text{
    constructor(item){
        this.label = item.label;
        this.element = null;
    }

    display(){
        this.element = document.createElement('div');
        this.element.classList.add("form-group");

        const label = document.createElement('label');
        label.innerHTML = this.label;

        this.element.appendChild(label);

        const input = document.createElement('input');
        input.type = "text";

        this.element.appendChild(input);

        return this.element;
    }

    onChange(callback){
        this.element.querySelector('input').addEventListener('keyup',(e) => {
            callback(e.target.value);
        });
    }
}
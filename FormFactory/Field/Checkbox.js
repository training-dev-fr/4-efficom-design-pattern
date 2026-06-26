import Field from "./Field.js";

export default class Checkbox extends Field {
    constructor(item) {
        super(item);
        this.options = item.options;
        this.selectedValue = [];
    }

    display() {
       
        let element = super.display([]);

        for (let opt of this.options) {
            const optLabel = document.createElement('label');
            const optInput = document.createElement('input');
            optInput.value = opt;
            optInput.type = "checkbox";
            optInput.name = this.name + "[]";
            optLabel.appendChild(optInput);
            optLabel.innerHTML += opt;
            this.element.appendChild(optLabel);
        }

        return this.element;
    }

    onChange(callback) {
        this.element.querySelectorAll('input').forEach(input => {
            input.addEventListener('click', (e) => {
                if(this.selectedValue.some(el => el === e.target.value)){
                    this.selectedValue = this.selectedValue.filter(el => el !== e.target.value);
                }else{
                    this.selectedValue.push(e.target.value);
                }
                callback(this.selectedValue);
            });
        })
    }
}
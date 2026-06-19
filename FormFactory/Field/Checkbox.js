export default class Checkbox {
    constructor(item) {
        this.label = item.label;
        this.options = item.options;
        this.selectedValue = [];
    }

    display() {
        this.element = document.createElement('div');
        this.element.classList.add("form-group");

        const label = document.createElement('label');
        label.innerHTML = this.label;

        this.element.appendChild(label);

        for (let opt of this.options) {
            const optLabel = document.createElement('label');
            const optInput = document.createElement('input');
            optInput.value = opt;
            optInput.type = "checkbox";
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
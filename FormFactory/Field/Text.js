import Field from "./Field.js";

export default class Text extends Field {
    constructor(item) {
        super(item);
    }

    display() {
        const input = document.createElement('input');
        input.type = "text";
        return super.display(input);
    }

    onChange(callback) {
        this.element.querySelector('input').addEventListener('keyup', (e) => {
            super.onChange(e.target.value, callback);
        });
    }
}
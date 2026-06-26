import FormatValidator from "../FormatValidator.js";

export default class Field {
    constructor(item) {
        this.label = item.label;
        this.id = item.id;
        this.name = item.name;
        this.element = null;
        this.formatValidator = new FormatValidator();
        this.children = null;
        if (item.format) {
            this.format = item.format;
        }
    }

    display(children) {
        this.element = document.createElement('div');
        this.element.classList.add("form-group");

        const label = document.createElement('label');
        label.innerHTML = this.label;
        if (this.id) {
            label.setAttribute("for", this.id);
        }

        this.element.appendChild(label);

        if (children instanceof HTMLElement) {
            if (this.id) {
                children.id = this.id;
            }
            if (this.name) {
                children.name = this.name;
            }
            this.children = children;
            this.element.appendChild(children);
        }

        return this.element;
    }

    onChange(value, callback) {
        if (this.format) {
            this.children.classList.remove("error");
            if (!this.formatValidator.check(this.format, value)) {
                this.children.classList.add("error");
            } else {
                callback(value);
            }
        } else {
            callback(value);
        }
    }
}
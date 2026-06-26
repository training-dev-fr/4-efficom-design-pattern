export default class Field {
    constructor(item) {
        this.label = item.label;
        this.id = item.id;
        this.name = item.name;
        this.element = null;
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

            this.element.appendChild(children);
        }

        return this.element;
    }
}
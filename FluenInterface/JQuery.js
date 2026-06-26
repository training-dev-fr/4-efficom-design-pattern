export default class jQuery {
    querySelector(selector) {
        this.element = document.querySelector(selector);
    }

    setFontSize(size) {
        this.element.style.fontSize = size;
        return this;
    }

    setColor(color) {
        this.element.style.color = color;
        return this;
    }

    setFontStyle(style) {
        this.element.style.fontStyle = style;
        return this;
    }
}

let $ = (selector) => {
    let jquery = new jQuery();
    jquery.querySelector(selector);
    return jquery;
}

export { $ };
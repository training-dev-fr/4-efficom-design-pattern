export default class jQuery{
    querySelector(selector){
        this.element = document.querySelector(selector);
    }

    setFontSize(){

    }

    setColor(){

    }

    setFontStyle(){

    }
}

let $ = (selector) => {
    let jquery = new jQuery();
    jquery.querySelector(selector);
    return jquery;
}

export {$};
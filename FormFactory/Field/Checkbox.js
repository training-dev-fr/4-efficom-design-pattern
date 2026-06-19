export default class Checkbox{
    constructor(item){
        this.label = item.label;
        this.options = item.options;
    }

    display(){
        return `
            <div class="form-group">
                <label>${this.label}</label>
                ${this.options.map(opt => {
                    return `<label><input type="checkbox" value="${opt}" /> ${opt}</label>`
                }).join("")}
            </div>` 
    }
}
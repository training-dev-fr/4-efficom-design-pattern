export default class Text{
    constructor(item){
        this.label = item.label;
    }

    display(){
        return `
            <div class="form-group">
                <label>${this.label}</label>
                <input type="text" />
            </div>` 
    }
}
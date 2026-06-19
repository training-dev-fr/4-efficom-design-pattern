export default class Password{
    constructor(item){
        this.label = item.label;
    }

    display(){
        return `
            <div class="form-group">
                <label>${this.label}</label>
                <input type="password" />
            </div>` 
    }
}
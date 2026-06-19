export default class Email{
    constructor(item){
        this.label = item.label;
    }

    display(){
        return `
            <div class="form-group">
                <label>${this.label}</label>
                <input type="email" />
            </div>` 
    }
}
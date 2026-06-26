export default class FormatValidator{
    constructor(){

    }

    check(format, value){
        if(format){
            let regex = new RegExp(format);
            return regex.test(value);
        }
        return true;
    }
}
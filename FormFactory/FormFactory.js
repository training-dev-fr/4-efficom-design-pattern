import Password from "./Password.js";
import Text from "./Text.js";

export default class FormFactory {
    constructor(element) {
        if (element.type === "text"){
            return new Text(element);
        } else if(element.type === "password"){
            return new Password(element);
        }
    }
}
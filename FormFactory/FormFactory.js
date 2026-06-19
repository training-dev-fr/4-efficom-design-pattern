import Checkbox from "./Field/Checkbox.js";
import Email from "./Field/Email.js";
import Password from "./Field/Password.js";
import Text from "./Field/Text.js";

export default class FormFactory {
    constructor(element) {
        switch (element.type) {
            case "text":
                return new Text(element);
            case "password":
                return new Password(element);
            case "email":
                return new Email(element);
            case "checkbox":
                return new Checkbox(element);
        }
    }
}
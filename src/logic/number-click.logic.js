
import { resolveInputValue } from "../services/resolve-input-value.service";

export const numberClick = number => ({ inputValue, subTextValue }, setValues) => {

    if (subTextValue[0] === 0) {
        subTextValue.shift();
    }

    subTextValue.push(number);

    inputValue = resolveInputValue(subTextValue);

    setValues({
        inputValue,
        subTextValue
    });
}

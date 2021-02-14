
import { resolveInputValue } from "../services/resolve-input-value.service";

export const taskClick = task => ({ inputValue, subTextValue }, setValues) => {

    subTextValue.push(task);

    inputValue = resolveInputValue(subTextValue);

    setValues({
        inputValue,
        subTextValue
    });
}

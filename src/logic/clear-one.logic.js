
import { resolveInputValue } from "../services/resolve-input-value.service";

import { equalsClick } from "./equals-click.logic";

export const clearOne = ({ inputValue, subTextValue }, setValues) => {

    subTextValue.pop();

    inputValue = resolveInputValue(subTextValue);

    equalsClick({ inputValue, subTextValue }, setValues);
}

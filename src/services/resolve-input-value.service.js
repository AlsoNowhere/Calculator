
export const resolveInputValue = subTextValue => subTextValue.join("")
    .replace(/\//, " \u00F7 ")
    .replace(/\*/, " x ")
    .replace(/\-/, " - ")
    .replace(/\+/, " + ");

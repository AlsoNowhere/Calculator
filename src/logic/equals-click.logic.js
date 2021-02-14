
import { resolveInputValue } from "../services/resolve-input-value.service";

import { tasks } from "../data/tasks.data";

export const equalsClick = ({ subTextValue }, setValues) => {

    if (
        tasks.includes(subTextValue[subTextValue.length - 1])
        || tasks.includes(subTextValue[0])
    ) {

        const inputValue = resolveInputValue(subTextValue);

        setValues({
            inputValue,
            subTextValue
        });

        return;
    }

    if (subTextValue.length === 0) {
        subTextValue.push(0);
    }

    const output = subTextValue.reduce((a, b) => {

        if (tasks.includes(b)) {
            a.calculatorValues.push(
                parseFloat(a.currentNumber),
                b
            );
            a.currentNumber = "";
        }
        else {
            a.currentNumber += b.toString();
        }

        return a;
    }, { calculatorValues: [], currentNumber: "" });

    output.calculatorValues.push(parseFloat(output.currentNumber));
    const { calculatorValues } = output;

    const { inputValue } = calculatorValues.reduce((a, b) => {

        if (tasks.includes(b)) {
            a.currentTask = b;
        }
        else {
            if (a.currentTask === null) {
                a.inputValue = b;
            }
            else {
                if (a.currentTask === "/") {
                    a.inputValue = a.inputValue / b;
                }
                if (a.currentTask === "*") {
                    a.inputValue = a.inputValue * b;
                }
                if (a.currentTask === "-") {
                    a.inputValue = a.inputValue - b;
                }
                if (a.currentTask === "+") {
                    a.inputValue = a.inputValue + b;
                }
                a.currentTask = null;
            }
        }

        return a;
    }, { inputValue: 0, currentTask: null });

    subTextValue.length = 0;
    subTextValue.push(inputValue);

    setValues({
        inputValue,
        subTextValue
    });
}

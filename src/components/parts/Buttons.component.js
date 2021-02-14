import { h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { InputContext } from "../../contexts/InputContext.context";

import { clear } from "../../logic/clear.logic";
import { clearOne } from "../../logic/clear-one.logic";
import { numberClick } from "../../logic/number-click.logic";
import { taskClick } from "../../logic/task-click.logic";
import { equalsClick } from "../../logic/equals-click.logic";

import { ButtonModel } from "../../models/Button.model";

const buttons = [
    new ButtonModel("AC", clear, "grey"),
    new ButtonModel("CE", clearOne, "grey"),
    new ButtonModel(),
    new ButtonModel("\u00F7", taskClick("/"), "blue"),
    new ButtonModel("7", numberClick(7)),
    new ButtonModel("8", numberClick(8)),
    new ButtonModel("9", numberClick(9)),
    new ButtonModel("x", taskClick("*"), "blue"),
    new ButtonModel("4", numberClick(4)),
    new ButtonModel("5", numberClick(5)),
    new ButtonModel("6", numberClick(6)),
    new ButtonModel("-", taskClick("-"), "blue"),
    new ButtonModel("1", numberClick(1)),
    new ButtonModel("2", numberClick(2)),
    new ButtonModel("3", numberClick(3)),
    new ButtonModel("+", taskClick("+"), "blue"),
    new ButtonModel("0", numberClick(0)),
    new ButtonModel(),
    new ButtonModel(".", numberClick(".")),
    new ButtonModel("=", equalsClick, "pink"),
];

export const Buttons = () => {

    const { inputValue, subTextValue, setValues } = useContext(InputContext);
    const [activeIndex, setActiveIndex] = useState(null);
    useEffect(() => {
        const setActive = () => setActiveIndex(null);
        document.body.addEventListener("mouseup", setActive);
        return () => document.body.removeEventListener("mouseup", setActive);
    }, []);

    return (
        <div className="buttons">
            <ul className="buttons__buttons">
                {buttons.map(({ label, onClick, colour }, i) => (
                    <li key={i}>
                        {!!label && (
                            <button type="button"
                                className={`buttons--button buttons--${colour} buttons--full ${activeIndex === i ? "buttons--active" : ""}`}
                                onClick={() => onClick({ inputValue, subTextValue }, setValues)}
                                onMouseDown={() => setActiveIndex(i)}
                            >{label}</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

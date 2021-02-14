import { h } from "preact";
import { useState } from "preact/hooks";

import { VisualDisplay } from "./VisualDisplay.component";

import { InputContext } from "../../contexts/InputContext.context";

import { Buttons } from "./Buttons.component";

export const Calculator = () => {

    const [values, setValues] = useState({ inputValue: 0, subTextValue: [0] });

    return (
        <div>
            <header className="calculator-header">
                <h1 className="calculator-header__text">Calculator</h1>
            </header>

            <main className="calculator">
                <InputContext.Provider value={{ ...values, setValues }}>
                    <VisualDisplay />

                    <Buttons />
                </InputContext.Provider>
            </main>
        </div>
    )
}

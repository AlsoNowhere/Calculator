import { h } from "preact";
import { useContext } from "preact/hooks";

import { InputContext } from "../../contexts/InputContext.context";

export const VisualDisplay = () => {

    const { inputValue } = useContext(InputContext);

    return (
        <div className="visual-display">
            <input className="visual-display__field"
                value={inputValue}
                title="Calculator output"
                aria-label="Calculator output"
                readonly />
        </div>
    )
}

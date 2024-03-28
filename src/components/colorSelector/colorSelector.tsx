import { useState } from "react";

enum Colors {
    RED,
    GREEN,
    BLUE,
}

function ColorSelector() {
    const [color, setColor] = useState(Colors.RED);
    return (
        <div className="color-selector">color selector</div>
    )
}

export default ColorSelector;
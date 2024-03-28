import "./sizeSelector.css";
import { useState } from "react";

enum Sizes {
    SMALL,
    MEDIUM,
    LARGE,
}

function SizeSelector() {
    const [size, setSize] = useState(Sizes.SMALL);
    return (
        <div className="size-selector">size selector</div>
    )
}

export default SizeSelector;
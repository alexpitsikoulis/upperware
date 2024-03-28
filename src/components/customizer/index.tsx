import "./customizer.css";
import { ReactNode, useState } from "react";
import Selector from "../selector";
import SizeSelector from "../sizeSelector"
import ColorSelector from "../colorSelector/colorSelector";
import CompartmnetsSelector from "../compartmentsSelector/compartmentsSelector";

enum Category {
    SIZE = "Size",
    COLOR = "Color",
    COMPARTMENTS = "Compartments",
}

const categories = [Category.SIZE, Category.COLOR, Category.COMPARTMENTS];

function Customizer() {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const category = categories[categoryIndex];
    return (
        <div className="customizer">
            <header className="customizer-header">
                <button onClick={() => {
                    if (categoryIndex < 1) {
                        setCategoryIndex(categories.length - 1);
                    } else {
                        setCategoryIndex(categoryIndex - 1);
                    }
                }}>prev</button>
                {category}
                <button onClick={() => {
                    if (categoryIndex > categories.length - 2) {
                        setCategoryIndex(0);
                    } else {
                        setCategoryIndex(categoryIndex + 1)
                    }
                }}>next</button>
            </header>
            <
                Selector
                    category={category}
            />
        </div>
    )
}

function renderSelector(option: Category): ReactNode {
    switch (option) {
        case Category.SIZE:
            return <SizeSelector />;
        case Category.COLOR:
            return <ColorSelector />;
        case Category.COMPARTMENTS:
            return <CompartmnetsSelector />;
    }
}

export {Customizer, Category};
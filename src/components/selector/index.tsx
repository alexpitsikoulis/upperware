import { useState } from "react";
import { Category } from "../customizer"

type SelectorProps = {
    category: Category
}

function Selector(props: SelectorProps) {
    return (
        <div className="selector">{props.category}</div>
    )
}

export default Selector;
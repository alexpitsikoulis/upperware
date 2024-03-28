import { useState } from "react";
import Display from "../display";
import { Customizer } from "../customizer";

function Main() {

    return (
        <div className="main">
            <Display/>
            <Customizer/>
        </div>
    )
}

export default Main;
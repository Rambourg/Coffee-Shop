import React from "react";
import DrinksItem from "../utils/drinkslist";

export default function Order() {
    return(
        <div class="is-flex is-flex-direction-row">
            <div class="is-flex is-flex-direction-row is-flex-wrap-w">
                <DrinksItem />
            </div>
        </div>
    );
}
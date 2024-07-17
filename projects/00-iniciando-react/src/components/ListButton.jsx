import PropTypes from "prop-types";
import { useState } from "react";
import { NewList } from "./NewList";

export const ListButton = ({ children }) => {
    const [items, modifyItems] = useState(children);

    const changeItems = (action = "push") => {
        if (action !== "push" && action !== "pop") return `Solo se acepta "pop" o "push"`;
        action == "push" ? modifyItems([...items, "Minion"]) : modifyItems(items.slice(0, -1));
    };

    return (
        <>
            <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary" onClick={() => changeItems("push")}>
                    Agregar
                </button>
                <button type="button" className="btn btn-primary" onClick={() => changeItems("pop")}>
                    Eliminar
                </button>
            </div>
            <NewList>{items}</NewList>
        </>
    );
};

ListButton.propTypes = {
    children: PropTypes.array.isRequired,
};

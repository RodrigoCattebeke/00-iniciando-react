import PropTypes from "prop-types";
import { useState } from "react";

export const NewList = ({ children }) => {
    const items = children;
    const [changes, confirmChanges] = useState(false);

    const changeItems = (action = "push") => {
        if (action !== "push" && action !== "pop") return `Solo se acepta "pop" o "push"`;
        action == "push" ? items.push("minion") : items.pop();
        console.log(items);
        confirmChanges(!changes);
    };

    const activeItem = (e) => {
        e.target.classList.add("active");
        confirmChanges(!changes);
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
            <ul className="list-group">
                {items.map((e, i) => (
                    <li className="list-group-item" key={e + i} onClick={(e) => activeItem(e)}>
                        {e}
                    </li>
                ))}
            </ul>
        </>
    );
};

NewList.propTypes = {
    children: PropTypes.array.isRequired,
};

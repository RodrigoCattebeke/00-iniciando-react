import PropTypes from "prop-types";
import { useState } from "react";

export const NewList = ({ children }) => {
    const [index, setIndex] = useState(0);

    const changeActive = (index) => {
        setIndex(index);
    };
    return (
        <ul className="list-group">
            {children.map((e, i) => (
                <li className={`list-group-item ${index == i ? "active" : ""}`} key={e + i} onClick={() => changeActive(i)}>
                    {e}
                </li>
            ))}
        </ul>
    );
};

NewList.propTypes = {
    children: PropTypes.array.isRequired,
};

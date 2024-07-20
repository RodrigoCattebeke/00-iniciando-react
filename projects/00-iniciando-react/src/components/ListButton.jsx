import PropTypes from "prop-types";
import { useState } from "react";
import { NewList } from "./NewList";
// import styles from "./Button css/Button.module.css";
import Styled from "styled-components";

const Btn = Styled.button`
background-color: ${(props) => (props.$isLoading ? "#444" : "rgb(242, 99, 99)")};
color: white;
border-radius: 5px;
border: 1px solid #000; 
`;

export const ListButton = ({ children }) => {
    // let buttonClass = `btn btn-primary ${[styles.buttonRed, styles.borderBlack].join(" ")}`;
    const [items, modifyItems] = useState(children);
    const [isLoading, setIsLoading] = useState(false);

    const changeItems = (action = "push") => {
        if (action !== "push" && action !== "pop") return `Solo se acepta "pop" o "push"`;
        if (action == "push") {
            setIsLoading(true);
            setTimeout(() => {
                modifyItems([...items, "Minion"]);
                setIsLoading(false);
            }, Math.random() * 500);
        } else {
            setTimeout(() => {
                modifyItems(items.slice(0, -1));
            }, Math.random() * 500);
        }
    };

    return (
        <div className="d-flex flex-column gap-2 my-3">
            <div className="buttons-container d-flex gap-2">
                <Btn $isLoading={isLoading} onClick={() => changeItems("push")}>
                    {isLoading ? "Cargando" : "Agregar"}
                </Btn>
                <Btn onClick={() => changeItems("pop")}>Eliminar</Btn>
            </div>

            <NewList>{items}</NewList>
        </div>
    );
};

ListButton.propTypes = {
    children: PropTypes.array.isRequired,
};

import { useState } from "react";
import { PropTypes } from "prop-types";

export const Card = ({ children }) => {
    let buttonBodyText = children,
        buttonClass = "btn-primary",
        buttonDisabled;
    const [buttonInfo, setButtonInfo] = useState("active");
    const changeButtonClass = (e) => {
        setButtonInfo("disabled");
    };

    if (buttonInfo == "disabled") {
        buttonBodyText = "Cargando...";
        buttonClass = "btn-secondary";
        buttonDisabled = "disabled";
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={changeButtonClass} className={`btn ${buttonClass} `} disabled={buttonDisabled}>
                    {buttonBodyText}
                </button>
            </div>
        </div>
    );

    Card.propTypes = {
        children: PropTypes.string.isRequired,
    };
};

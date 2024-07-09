import { act, useState } from "react";

export const Card = () => {
    const [buttonInfo, setButtonInfo] = useState({ class: "btn-primary", text: "Aprietame", actived: "" });
    const changeButtonClass = (e) => {
        setButtonInfo({ class: "btn-secondary", text: "Cargando...", actived: "disabled" });
    };
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={changeButtonClass} className={"btn " + buttonInfo.class} disabled={buttonInfo.actived}>
                    {buttonInfo.text}
                </button>
            </div>
        </div>
    );
};

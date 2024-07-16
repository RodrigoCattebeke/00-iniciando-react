import PropTypes from "prop-types";

export const Button = ({ children }) => {
    return (
        <button type="button" className="btn btn-primary">
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

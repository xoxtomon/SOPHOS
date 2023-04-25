import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
    const { id, firstName, lastName } = props;
    return (
        <div className="card">
            <div className="card-header">
                <h2>{`${firstName} ${lastName}`}</h2>
            </div>
            <div className="card-body">
                <p>ID: {id}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default Card;
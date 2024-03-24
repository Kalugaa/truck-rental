import PropTypes from "prop-types";
import React from "react";
import { FaStar } from "react-icons/fa";

const starColor = (index, filledStars, maxStars) =>
    index < filledStars ? "#ffc531" : "#f2f4f7";

export const RatingStars = ({ rating }) => {
    const maxStars = 5;
    const filledStars = rating;

    return (
        <div>
            {[...Array(maxStars)].map((_, index) => {
                return (
                    <span key={index}>
                        <FaStar
                            color={starColor(index, filledStars, maxStars)}
                            style={{ marginRight: "4px" }}
                        />
                    </span>
                );
            })}
        </div>
    );
};

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};

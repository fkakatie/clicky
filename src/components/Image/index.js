import React from 'react';

const Image = (props) => {

    return (
        <img className="character-image"
            src={props.src}
            alt={props.alt}
            data-clicked={props.clicked}
            onClick={() => props.handleClick()}
        />
    )

}

export default Image;
import React from 'react';

const Image = (props) => {

    return (
        <img className="character-image"
            src={props.src}
            alt={props.alt}
            data-id={props.id} 
            data-clicked={props.clicked}
            onClick={() => props.handleClick(props.id, props.alt)}
        />
    )

}

export default Image;
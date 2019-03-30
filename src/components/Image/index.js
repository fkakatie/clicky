import React from 'react';

const Image = (props) => {

    return (
        <img className={"character-image " + (
                props.difficulty === "1" || props.difficulty === "2" ? 'big' : 
                    props.difficulty === "3" ? 'medium' : 'small' 
            )}
            src={props.src}
            alt={props.alt}
            data-id={props.id} 
            data-clicked={props.clicked}
            onClick={() => props.handleClick(props.id, props.alt)}
        />
    )

}

export default Image;
import React from 'react';

// this needs to be a className!
const Instructions = (props) => {
    return (
        <div className="instructions-box">
            <div className="banner">
                <i class="fas fa-book-open"></i>Instructions
            </div>
            <p>
                In Super Smash Bros. React, each Super Smash character is displayed. Select each unique fighter to earn points, but only click each fighter once!
            </p>

            <p>
                If you select the same fighter twice in a single game, you lose. Challenge yourself to a rematch!
            </p>

            <p>
                If you select each unique fighter only once in a single game, you win! Become the ultimate champion!
            </p>

            <p>
                Start with 64 and work your way up to Ultimate. The greater the intensity, the greater the challenge! 
            </p>
            
            <p>    
                Choose your game from the dropdown above to begin...
            </p>

        </div>
    )
}

export default Instructions;
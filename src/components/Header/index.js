import React from 'react';

// this needs to be a className!
const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="parallelograms">
                    <a className="parallelogram portfolio" href="/" target="_blank">
                        <i className="fas fa-arrow-left"></i>
                    </a>
                    <a className="parallelogram github" href="/" target="_blank">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
                <div className="dropbox">
                    <div className="left"></div>
                    <div className="dropdown">
                        <select>
                            <option value="0">Select Game:</option>
                            <option value="1">64</option>
                            <option value="2">Melee</option>
                            <option value="3">Brawl</option>
                            <option value="4">Wii U</option>
                            <option value="5">Ultimate</option>
                        </select>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="scorebox">
                    <div className="left"></div>
                    <div className="scores">
                        <p>Score
          <span className="arrow">⯇</span>
                            <strong>{props.score}</strong>/<strong>{props.length}</strong>
                            <span className="arrow">⯈</span>
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
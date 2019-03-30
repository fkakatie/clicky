import React, { Component } from 'react';
// import Header from '../Header';
import Image from '../Image';
import images from '../../images.json';

class Game extends Component {

    state = {
        images,
        difficulty: "0",
        outOf: images.length,
        currentScore: 0,
        wins: 0
    }

    setDifficulty = (event) => {
        this.setState({
            difficulty: event.target.value
        }, this.renderDifficulty());
        console.log(this.state.difficulty);
    }

    renderDifficulty = () => {
        if (this.state.difficulty === "1") {
            const oneDiffImages = images.filter(image => image.series.includes('64') );
            this.setState({
                images: this.shuffle(oneDiffImages),
                outOf: oneDiffImages.length
            });
        } else if (this.state.difficulty === "2") {
            console.log('running');
            const twoDiffImages = images.filter(image => image.series.includes('melee') );
            this.setState({
                images: this.shuffle(twoDiffImages),
                outOf: twoDiffImages.length
            });
        } else if (this.state.difficulty === "3") {
            const threeDiffImages = images.filter(image => image.series.includes('brawl') );
            this.setState({
                images: this.shuffle(threeDiffImages),
                outOf: threeDiffImages.length
            });
        } else if (this.state.difficulty === "4") {
            const fourDiffImages = images.filter(image => image.series.includes('wiiu') );
            this.setState({
                images: this.shuffle(fourDiffImages),
                outOf: fourDiffImages.length
            });
        } else if (this.state.difficulty === "5") {
            this.setState({
                images: this.shuffle(images),
                outOf: images.length
            });
        }
    }

    shuffle = images => {
        for (var i = (images.length - 1); i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i];
            images[i] = images[j];
            images[j] = temp;
        }
        return images;
    }

    componentDidMount() {
        this.renderDifficulty();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        if (prevState.currentScore !== this.state.currentScore) {
            this.checkIfWin();
        }
        if (prevState.difficulty !== this.state.difficulty) {
            this.renderDifficulty();
        }
        if (prevState.wins !== this.state.wins) {
            this.resetGame();
        }
    }

    handleClick = (id, alt) => {
        console.log('clicked', id, alt);
        const clickedImages = this.state.images.map(image => {
            if (image.id === id) {
                image.clicked === true ?
                    this.badClick(image) :
                    this.goodClick(image);
            }
            // console.log(image.alt, image.clicked);
            return image;
        });
        // console.log(clickedImages);
        this.setState({
            images: this.shuffle(clickedImages)
        });
    }

    // if image HAS NOT BEEN CLICKED
    goodClick(image) {
        // console.log('good click');
        image.clicked = true;
        //console.log(image.alt, image.clicked);
        this.setState({
            currentScore: this.state.currentScore + 1
        });
        // console.log(this.state.currentScore);
    }

    // if image HAS BEEN CLICKED
    badClick(image) {
        // console.log('bad click');
        alert('You already selected ' + image.alt);
        this.resetGame();
    }

    checkIfWin = () => {
        console.log(this.state.currentScore, this.state.outOf);
        if (this.state.currentScore === (this.state.outOf)) {
            this.winGame();
        }
    }

    // all images HAVE BEEN CLICKED
    winGame() {
        // console.log(this.state.currentScore, this.state.outOf);
        console.log('win game');
        this.setState({
            wins: this.state.wins + 1
        }, this.resetGame());
    }

    // starts game all over again
    resetGame() {
        console.log('reset game');
        const resetImages = this.state.images.map(image => {
            image.clicked = false;
            // console.log(image.alt, image.clicked);
            return image;
        })
        this.setState({
            currentScore: 0,
            images: this.shuffle(resetImages)
        });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="parallelograms">
                            <a className="parallelogram back" href="/" target="_blank">
                                <i className="fas fa-arrow-left"></i>
                            </a>
                            <a className="parallelogram instructions" href="/" target="_blank">
                                <i className="fas fa-book"></i>
                            </a>
                        </div>
                        <div className="dropbox">
                            <div className="left"></div>
                            <div className="dropdown">
                                <select id="difficulty" onChange={this.setDifficulty} value={this.state.difficulty}>
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
                                <p>Score&nbsp;
          <span className="arrow">⯇</span>
                                    <strong>{this.state.currentScore}</strong>/<strong>{this.state.outOf}</strong>
                                    <span className="arrow">⯈</span>
                                </p>
                            </div>
                            <div className="right"></div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="container character-container">
                        {
                            this.state.images.map(image => {
                                return (
                                    <Image
                                        key={image.id}
                                        id={image.id}
                                        src={image.src}
                                        alt={image.alt}
                                        handleClick={this.handleClick}
                                        difficulty={this.state.difficulty}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default Game;
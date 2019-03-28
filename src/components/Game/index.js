import React, { Component } from 'react';
import Image from '../Image';
import images from '../../images.json';

class Game extends Component {

    state = {
        images,
        currentScore: 0,
        wins: 0
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
        this.setState({ 
            images: this.shuffle(this.state.images) 
        });
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

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        if (prevState.currentScore !== this.state.currentScore) {
            this.checkIfWin();
        }
    }

    // if image HAS BEEN CLICKED
    badClick(image) {
        // console.log('bad click');
        alert('You already selected ' + image.alt);
        this.resetGame();
    }

    checkIfWin = () => {
        console.log(this.state.currentScore, images.length);
        if (this.state.currentScore === (images.length)) {
            this.winGame();
        }
    }

    // all images HAVE BEEN CLICKED
    winGame() {
        // console.log(this.state.currentScore, images.length);
        if (this.state.currentScore === images.length) {
            console.log('win game');
            this.setState({ 
                wins: this.state.wins + 1 
            }, this.resetGame());
            
        }
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
            <section>
                <div className="container">
                    <p>Current Score: {this.state.currentScore}/25</p>
                    <p>Wins: {this.state.wins}</p>
                </div>
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
                                />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Game;
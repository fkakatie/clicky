import React, { Component } from 'react';
import Image from '../Image';
import images from '../../images.json';

class Game extends Component {

    state = {
        images
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

    handleClick = () => {
        console.log('clicked');
    }

    render() {
        return (
            <section>
                <div className="container character-container">
                    {
                        this.state.images.map(image => {
                            return (
                                <Image
                                    key={image.id}
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
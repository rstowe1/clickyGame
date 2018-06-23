import React, {Component} from 'react';
import memory from '../memory';
import images from '../../image';
import './clicky.css'

class clickyContainer extends Component {
  state =
    {
      images,
      message: "Click to Start!",
      score: 0,
      highScore: 0
    };

  handler = (id, clicked) => {
    const imageArrangement = this.state.images;

    if (clicked) {
      imageArrangement.forEach((image, index) => {
          imageArrangement[index].clicked = false;
        }
      );
      return this.setState(
        {
          image: imageArrangement.sort(() =>
            Math.random() - 0.5),
          message: "Wrong!",
          score: 0
        }
      )
    }
    else {
      imageArrangement.forEach((image, index) => {
        if (id === image.id) {
          imageArrangement[index].clicked = true;
        }
      });

      const {highScore, score} = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > highScore ? newScore : highScore;

      return this.setState(
        {
          image: imageArrangement.sort(() =>
            Math.random() - 0.5),
          message: "Winner Winner Chicken Dinner!",
          score: newScore,
          highScore: newTopScore,
        })
    }
  };

  render() {
    return (
      <div className="container-fluid clickyContainer">
        <div className="gameMessage text-center">
          <p>{this.state.message}</p>
        </div>
        <div className="gameScores text-center">
          <p>Score: {this.state.score} | Top Score: {this.state.highScore}</p>
        </div>
        <div className="container">

          <div className="row">
            {this.state.images.map(image => (
              <memory
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={this.handler}
              />
            ))}
          </div>

        </div>
      </div>
    );
  }
}


export default clickyContainer;
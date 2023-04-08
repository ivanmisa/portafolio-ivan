import React, { Component } from 'react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';


class Card extends Component {
    constructor(props) {
        super(props)
        this.state={
            iconGame: []
        }
    }

    clicked(framework){
      this.props.click(framework);
        if(this.props.framework == 'icon1.png'){
            this.state.iconGame = icon1;
        }
        if(this.props.framework == 'icon2.png'){
            this.state.iconGame = icon2;
        }
        if(this.props.framework == 'icon3.png'){
            this.state.iconGame = icon3;
        }
        if(this.props.framework == 'icon4.png'){
            this.state.iconGame = icon4;
        }
        if(this.props.framework == 'icon5.png'){
            this.state.iconGame = icon5;
        }
    }

    
    render() {
        return (
            <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.framework)}>
                <div className="front">
                    ?
                </div>
                <div className="back">                     
                    <img src={this.state.iconGame} alt=""/>
                </div>
            </div>
        )
    }
};





export default Card;
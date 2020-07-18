import React, { Component } from 'react';
class Detail extends Component {
    render() {
        const {onDetail} = this.props;
        return (
            <div class="container" onClick={onDetail}>
                <img src={"images/"+this.props.item.image}></img>
                <h1 class="title-namede">{this.props.item.title}</h1>
                <h3 class="pricede">Price: {this.props.item.price} VND</h3>
                <h5 class="des">Detail:{this.props.item.detail}</h5>
		    </div>
        );
    }
}

export default Detail;

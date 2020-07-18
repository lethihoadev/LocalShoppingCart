import React, { Component } from 'react';
import '../components/AddProduct.css';
import { FaOpencart } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';

class ProductItem extends Component {
    
render(){
    const {onItemClick,onDetail} = this.props;
    return(
        <div className="cont">
            <div className="pro">
                <img src={"images/"+this.props.item.image} width="200px" height="160px"></img>
                <h5>{this.props.item.title}</h5>
                <h5>{this.props.item.price}</h5>
                <button class="btn btn-outline-success" onClick={onItemClick}><FaOpencart/></button>
                <button class="btn btn-outline-info" onClick={onDetail}><FaRegEye/></button>
            </div>
        </div>
    );
}
}

export default ProductItem;
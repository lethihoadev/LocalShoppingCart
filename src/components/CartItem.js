import React, { Component } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

class CartItem extends Component {
    render(){
        const {onDelete,onPlus,onMinus} = this.props;
        return(
            <tbody>
            <tr>
                <td><img src={"images/"+this.props.item.image} width="80px" height="80px"></img></td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.price}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onClick={onMinus}> - </button>
                        {this.props.item.quantity}
                    <button class="btn btn-secondary btn-sm" onClick={onPlus}> + </button>
                    </td>
                    <td>{this.props.item.price*this.props.item.quantity}</td>
                <td><button className="btn btn-danger" onClick={onDelete}><FaRegTrashAlt/></button></td>
            </tr>
        </tbody>
        );
    }
}
export default CartItem;
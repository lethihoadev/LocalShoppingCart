import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

class ListProduct extends Component {
    render() {
        const { onDeleteItem,onEdit} = this.props;
        return (
            <tbody>
            <tr>
                <td><img src={"images/"+this.props.item.image} width="100px" height="80px"></img></td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.detail}</td>
                <td>{this.props.item.category}</td>
                <td><button class="btn btn-outline-danger" onClick={onDeleteItem}><FaTrashAlt/></button></td>
                <td><button class="btn btn-outline-info" onClick={onEdit}><FaPen/></button></td>
            </tr>
        </tbody>
        );
    }

}
export default ListProduct;
import React, { Component } from 'react';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")),
            menu:"cart"
        }
        this.onCheckOut=this.onCheckOut.bind(this);
        if (!this.state.cart) {
            this.state.cart = [];
        }
    }
    onDelete(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            let oldItem = cart.find((element) => element.id == item.id);
            cart.splice(cart.indexOf(oldItem), 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
            alert("You are deleted this product");
            window.location.reload();
        }
    }
    sumMoney() {
        var totalProduct = 0;
        for (var i = 0; i <  this.state.cart.length; i++) {
            totalProduct +=  this.state.cart[i].price *  this.state.cart[i].quantity;
        }
        return totalProduct;
    }

    onPlus(item) {
        return (event) => {
           let cart = this.state.cart;
           item.quantity++;
           this.setState({
               cart:cart
           })
           localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    onMinus(item) {
        return (event) => {
           let cart = this.state.cart;
           item.quantity--;
           if(item.quantity <= 0){
               cart.splice(cart.indexOf(cart.find((element) => element.id == item.id)), 1);
           }
           this.setState({
               cart:cart
           })
           localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    onCheckOut(){
        this.setState({
            menu:"check"
        })
    }

    render() {
        return (
            <div className="cart">
            <div> You are having <span className="quantity">{this.state.cart.length}</span> products</div>
            <div> Total:<span className="total">{this.sumMoney()} </span>$</div>
            <table class="table-bordered" width="1000px" align="center">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                {this.state.cart.map((item, index) =>
                    <CartItem onDelete={this.onDelete(item)} onPlus={this.onPlus(item)} onMinus={this.onMinus(item)} item={item} />
                )}
             </table>
             <div class="next-steps">
                <button class="btn btn-outline-primary btn-sm" ><a href="Product">Continue Shopping</a></button>
                <button class="btn btn-outline-info btn-sm" onClick={this.onCheckOut}>Check out</button>  
             </div>
             {this.state.menu == "check" ? <CheckOut /> : null}
       
            </div>
        );
    }
}
export default Cart;
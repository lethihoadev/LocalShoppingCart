import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct.js';
import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products",
      cart: JSON.parse(localStorage.getItem("cart"))
    }

    if (!this.state.cart) {
      this.state.cart = [];
    }
    this.onAddProductClicked = this.onAddProductClicked.bind(this);
    this.onProductClicked = this.onProductClicked.bind(this);
    this.onAddCartClicked = this.onAddCartClicked.bind(this);
  }
  onProductClicked() {
    this.setState({
      menu: "products"
    })
  }
  onAddProductClicked() {
    this.setState({
      menu: "add-product"
    })
  }
  onAddCartClicked() {
    this.setState({
      menu: "cart-product"
    })
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <button class="btn btn-link" onClick={this.onProductClicked}><a className="title-maim">Products</a></button>
              </li>
              <li class="nav-item">
                <button class="btn btn-link" onClick={this.onAddProductClicked}><a className="title-maim">Add Product</a></button>
              </li>
              <li class="nav-item">
                <button class="btn btn-link" onClick={this.onAddCartClicked}><a className="title-maim">Cart <span className="len">({this.state.cart.length})</span></a></button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="top-m">
          {this.state.menu == "products" ? <Products /> : null}
          {this.state.menu == "add-product" ? <AddProduct /> : null}
          {this.state.menu == "cart-product" ? <Cart /> : null}
        </div>
      </div>
    );

  }
}

export default App;

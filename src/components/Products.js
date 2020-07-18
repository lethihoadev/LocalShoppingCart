import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Search from './Search';
import Detail from './Detail';

class Products extends Component {
    constructor() {
        super();
        this.products = JSON.parse(localStorage.getItem("products"));
        if (!this.products) {
            this.products = [];
        }
        this.state = {
            products: this.products,
            valueSearch: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);

    }

    onItemClick(item) {
        return () => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }
            let oldItem = cart.find((element) => element.id == item.id);

            if (oldItem) {
                oldItem.quantity += 1;
                alert("Quantity of " + oldItem.title + " is: " + oldItem.quantity);
            } else {
                item.quantity = 1;
                cart.push(item);
                alert("Quantity of " + item.title + " is: " + item.quantity);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        }
    }


    handleSearch = (search) => {
        var suitPro = [];
        let oldProducts = JSON.parse(localStorage.getItem("products"));
        if (!oldProducts) {
            oldProducts = [];
        }
        if (search.length <= 0 || search === '') {
            this.setState({
                products: oldProducts,
                valueSearch: search
            })
        } else {
            let searchValue = search.toLowerCase();
            for (var i = 0; i < oldProducts.length; i++) {
                if (oldProducts[i].title.toLowerCase().indexOf(searchValue) != -1) {
                    suitPro.push(oldProducts[i]);
                }
            }
            this.setState({
                products: suitPro,
                valueSearch: search
            })
        }
    }

    sortByPriceAsc = () => {

        let sortedProductsAsc;
        sortedProductsAsc = this.state.products.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
        })
        this.setState({
            products: sortedProductsAsc
        })
    }

    sortByPriceDesc = () => {
        let sortByPriceDesc;
        sortByPriceDesc = this.state.products.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        })
        this.setState({
            products: sortByPriceDesc
        })
    }

    onDetail(item){
        return(event)=>{
          let detail=[];
         detail.push(item);
         this.setState({
          products: detail})
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Search
                        valueSearch={this.state.valueSearch}
                        handleSearch={this.handleSearch}
                    /><br></br>
                    <button class="btn btn-outline-warning btn-sm" onClick={this.sortByPriceDesc}>DESC</button>
                    <button class="btn btn-outline-warning btn-sm" onClick={this.sortByPriceAsc}>ASC</button>
                </div>

                {
                    this.state.products.map((item) =>
                        <ProductItem onItemClick={this.onItemClick(item)} onDetail={this.onDetail(item)}
                            item={item}
                        />)
                        
                }
                {/* {
                    this.state.products.map((item) =>
                    <Detail onDetail={this.onDetail(item)}
                        item={item}
                    />)
                } */}
            </div>

        );
    }
}
export default Products;


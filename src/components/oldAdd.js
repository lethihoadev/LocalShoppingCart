
import React, { Component } from 'react';
import '../components/AddProduct.css';
import Select from 'react-select';
import ListProduct from './ListProduct';

const categories = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
    { value: "Panda", label: "Panda" }
]

class AddProduct extends Component {
    constructor() {
        super();
        this.products = JSON.parse(localStorage.getItem("products"));
        if (!this.products) {
            this.products = [];
        }
    }
    onAddProduct(event) {
        let products = JSON.parse(localStorage.getItem("products"));
        if (!products) {
            products = [];
        }
        event.preventDefault();
        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let detail = event.target["detail"].value;
        let image = event.target["photo"].files.item(0).name;
        let category = event.target["category"].value;
        let product = {
            id: 0,
            image: image,
            title: title,
            price: price,
            detail: detail,
            category: category
        }
        if (event.target["submit"].value === "null") {
            product.id = products[products.length - 1].id + 1;
            products.push(product);
        } else {
            product.id = event.target["submit"].value;
            let oldItem = products.find((element) => element.id == event.target["submit"].value);
            products[products.indexOf(oldItem)] = product;
        }
        localStorage.setItem("products", JSON.stringify(products));
        window.location.reload();
    }
    onDeleteItem(item) {
        return (event) => {
            let products = JSON.parse(localStorage.getItem("products"));
            let oldItem = products.find((element) => element.id == item.id);
            products.splice(products.indexOf(oldItem), 1);
            localStorage.setItem("products", JSON.stringify(products));
            alert("You are deleted this product");
            window.location.reload();
        }
    }

    onEdit(item) {
        return (event) => {
            document.getElementById("title").value = item.title;
            document.getElementById("price").value = item.price;
            document.getElementById("detail").value = item.detail;
            document.getElementById("image").innerHTML = "<img src=images/" + item.image + ">";
            document.getElementById("old_category").innerHTML = item.category;
            document.getElementById("submit").value = item.id;
        }
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.onAddProduct}>
                    <h3>Add Product</h3>
                    <div class="form-group">
                        <input class="form-control" type="text" name="title" placeholder="Enter name..." id="title" />
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" name="price" placeholder="Enter price..." id="price" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" type="textarea" name="detail" placeholder="Enter detail..." id="detail" />
                    </div>
                    <div class="form-group">
                        <div id="image"></div>
                        <input class="form-control" type="file" name="photo" />
                    </div>
                    <div class="form-group">
                        <div id="old_category"></div>
                        <Select className="cate" name="category" options={categories} id="category">
                        </Select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-secondary btn-lg btn-block" id="submit" name="submit" value="null">Add</button>
                    </div>
                </form>
                <div class="mana-pro">
                    <h3>Products Management</h3>
                    <table class="table-bordered" width="1090px" align="center">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th colspan="2">Action</th>
                        </tr>
                        {
                            this.products.map((item) =>
                                <ListProduct onDeleteItem={this.onDeleteItem(item)} onEdit={this.onEdit(item)} item={item} />)
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default AddProduct;
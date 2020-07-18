import React, { Component } from 'react';
import '../components/AddProduct.css';
import Select from 'react-select';
import ListProduct from './ListProduct';

const categories=[
    {value:"Dog", label:"Dog"},
    {value: "Cat", label:"Cat"},
    {value: "Rabbit", label:"Rabbit"},
    {value: "Panda",label:"Panda"}
]

class AddProduct extends Component{
    constructor(){
        super();
        this.products = JSON.parse(localStorage.getItem("products"));
        if (!this.products) {
            this.products = [];
        }
    }
    onAddProduct(event){
        event.preventDefault();
		let title = event.target["title"].value;
        let price = event.target["price"].value;
        let category = event.target["category"].value;
        let detail = event.target["detail"].value;
        let image = event.target["photo"].files.item(0).name;
        let products = JSON.parse(localStorage.getItem("products"));
        if(!products){
            products = [];
        }
        
        let product = {
            id:products.length+1,
            image:image,
            title:title,
            price:price,
            detail:detail,
            category:category
        }
        products.push(product);
        localStorage.setItem("products",JSON.stringify(products));
        console.log(products);
        window.location.reload();
    }
    onDeleteItem(item) {
        return (event) => {
            let products = JSON.parse(localStorage.getItem("products"));
            let oldItem = products.find((element) => element.id == item.id);
            products.splice(products.indexOf(oldItem), 1);
            localStorage.setItem("products", JSON.stringify(products));
            console.log(products);
            alert("You are deleted this product");
            window.location.reload();
        }
    }
    

    render(){
        return (
            <div  class="container">
            <form onSubmit={this.onAddProduct}>
                <h3>Add Product</h3>
                <div class="form-group">
                    <input class="form-control" type="text" name="title" placeholder="Enter name..."/>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" name="price" placeholder="Enter price..."/>
                </div>
                <div class="form-group">
                    <textarea class="form-control" type="textarea" name="detail" placeholder="Enter detail..."/>
                </div>
                <div class="form-group">
                    <input class="form-control" type="file" name="photo"/>
                </div>
                <div class="form-group">
                <Select className="cate" name="category" options={categories}>
                </Select></div>
                <div class="form-group">
                <button type="submit" class="btn btn-secondary btn-lg btn-block">Add</button>
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
                <ListProduct onDeleteItem = { this.onDeleteItem(item) } item = { item }/>)
                }

                </table>
            </div>
                
            </div>
          );
    }
}

export default AddProduct;
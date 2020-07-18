import React, { Component } from 'react';
class CheckOut extends Component {
    render() {
        return (
          <div  class="container">
          <form>
              <h3>CHECK OUT</h3>
              <div class="form-group">
                  <input class="form-control" type="text" name="title" placeholder="Enter name..."/>
              </div>
              <div class="form-group">
                  <input class="form-control" type="text" name="price" placeholder="Enter address..."/>
              </div>
              <div class="form-group">
                  <input class="form-control" type="text" name="detail" placeholder="Enter email..."/>
              </div>
              <div class="form-group">
                  <input class="form-control" type="text" name="photo"/>
              </div>
              <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg btn-block">Ordered</button>
              </div>
          </form>
          </div>
        );
    }

}
export default CheckOut;
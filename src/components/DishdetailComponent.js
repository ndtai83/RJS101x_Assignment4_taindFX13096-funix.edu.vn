import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    };
  }
}

export default DishDetail;
import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import StaffList from './components/StaffListComponent.js';
import StaffList from './components/StaffListComponent';
// import Staff from './components/StaffComponent';
import StaffDetail from './components/StaffDetailComponent';
import DepartmentDetail from './components/DepartmentComponent';
// import Staff from './components/StaffComponent';
import { STAFFS } from './shared/staffs';
import {DEPARTMENTS} from './shared/staffs';
import { Component } from 'react/cjs/react.production.min';
// import {STAFFS} from './shared/staffs.js';
import { LEADERS } from './shared/leaders';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
class App extends Component {

// function App(props) {
// function App() {
  constructor (props) {
    super(props);
    this.state = {
      // staffs : null,
      staffs : STAFFS,
      depts: DEPARTMENTS
      // leaders: LEADERS
    };
  }
  render () {
  return (
    <div>
      <div>
        <h1>Ứng dụng quản lý nhân sự v1.0</h1>
      </div>

      {/* Add Navbar with reactstrap */}
        {/* <Navbar>
          <div>
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar> */}
      {/* <StaffList staffs={this.state.staffs.name}/></StaffList> */}
      {/* <StaffList name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</StaffList> */}
      {/* <div> */}
        {/* <p>Nhân Viên</p> */}
        {/* <Staff staffs={this.state.staffs}/> */}
        {/* <StaffDetail staffs={this.state.staffs} /> */}
        {/* <StaffDetail staff={this.state.staffs} /> */}
        {/* <StaffDetail staff="Ford" /> */}
        {/* <StaffDetail /> */}
      {/* </div> */}
      <StaffList staffs={this.state.staffs}/>
      {/* <BrowserRouter> */}
      <div>
          <StaffDetail />
        {/* <DepartmentDetail /> */}
        {/* <DepartmentDetail depts={this.state.depts} /> */}
        {/* <p>Nhân viên</p> */}
        {/* <StaffDetail /> */}
      </div>
      {/* </BrowserRouter> */}
      {/* <Staff staffs={this.state.staffs}/> */}
      {/* <StaffList staffs={this.state.staffs}/> */}
      {/* <Staff staffs={this.state.staffs}/> */}
      {/* <StaffList staffs={this.state.staffs}/> */}
    </div>
  );
  }
}
// }

export default App;

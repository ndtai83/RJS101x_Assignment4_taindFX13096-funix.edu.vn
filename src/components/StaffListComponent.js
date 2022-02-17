import React, { Component } from "react";
// import { STAFFS } from './shared/staffs';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
// import Staff from './components/StaffComponent';
import StaffDetail from '../components/StaffDetailComponent';
import DepartmentDetail from '../components/DepartmentComponent';
import Salary from '../components/SalaryComponent';
import Header from '../components/HeaderComponent';
import { BrowserRouter, Routes } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import StaffList from './components/StaffListComponent.js';
// import StaffList from './components/StaffListComponent';
// import Staff from './components/StaffComponent';
// import StaffDetail from './components/StaffDetailComponent';
// import Staff from './components/StaffComponent';
import { STAFFS } from '../shared/staffs';
import {DEPARTMENTS} from '../shared/staffs';
// import { Component } from 'react/cjs/react.production.min';
// import {STAFFS} from './shared/staffs.js';
// import { LEADERS } from './shared/leaders';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs : null,
            // staffs : STAFFS
        };
    }

    onStaffClick(staff) {
        this.setState({
            staffs: staff,
            // name: staff.name
            name : staff.name,
            doB: staff.doB,
            startDate: staff.startDate,
            department: staff.department.name,
            annualLeave: staff.annualLeave,
            overTime: staff.overTime
        });
    }

    // onDepartmentClick(dept) {
    //     this.setState({
    //         // departmentName: DEPARTMENTS.name
    //         depts: dept,
    //         departmentName: dept.name
    //     })
    //     // this.setState({
    //     //     staffs: staff,
    //     //     // name: staff.name
    //     //     name : staff.name,
    //     //     doB: staff.doB,
    //     //     startDate: staff.startDate,
    //     //     department: staff.department.name,
    //     //     annualLeave: staff.annualLeave,
    //     //     overTime: staff.overTime
    //     // });
    //     console.log("abc");
    //     console.log(dept);
    //     // console.log(name);
    // }

    onDepartmentClick(dept) {
        // {<DepartmentDetail name = {DEPARTMENTS[0].name}/>}
        // return (
        //     <div>
        //         {/* <DepartmentDetail name = {DEPARTMENTS[0].name}/> */}
        //         <h4>Họ và tên:</h4>
        //     </div>
        // );
        // this.setState({
        //     // departmentName: DEPARTMENTS.name
        //     depts: dept,
        //     departmentName : dept.name
        //     // departmentName: DEPARTMENTS.name
        // })
        // this.setState({
        //     staffs: staff,
        //     // name: staff.name
        //     name : staff.name,
        //     doB: staff.doB,
        //     startDate: staff.startDate,
        //     department: staff.department.name,
        //     annualLeave: staff.annualLeave,
        //     overTime: staff.overTime
        // });
        // return (
        //     <div>
        //         <p>Bấm vào tên nhân viên để xem thông tin.</p>
        //     </div>
        // );
        // console.log("abc");
        // console.log(dept);
        // console.log("def");
        // console.log(dept);
        // console.log(name);
        // console.log(depts);
    }

    renderstaff(staff) {
        if(staff != null) {
            return (
                <div>
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {staff.doB}</p>
                    <p>Ngày vào công ty: {staff.startDate}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Bấm vào tên nhân viên để xem thông tin.</p>
                </div>
            );
        }
    }

    render() {
        
            //const StaffList = (props) => {
            // console.log(this.props) //Giá trị của props
            // var a = typeof(this.props.staffs[0].name);
            // console.log(a);
            // console.log(DEPARTMENTS[0].name)
            // console.log(DEPARTMENTS)
            // console.log(this.props.staffs[0].name);
            // console.log(this.props);
            // console.log("abc");
            // console.log(this.state.staffs);
            const staffList = this.props.staffs.map((staff) => {
                return (
                    // add css to arrange the text
                    // <div onClick = {() => this.onStaffClick(staff)}>
                    <div>
                        <Card onClick = {() => this.onStaffClick(staff)}>
                        {/* <CardImg src={item.image} alt={item.name} /> */}
                        <CardImg src={staff.image} alt={staff.image} />
                        {/* <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                        </CardBody> */}
                        </Card>
                        <li>{staff.name}</li>
                        {/* <li>{staff.image}</li> */}
                        {/* <p>Phòng Ban</p> */}
                    </div>
                );
            })

            return (
                // const element = {this.state.staffs[0].name};
                <div className = "container">
                    <div>
                        <Header />
                    </div>
                    <BrowserRouter>
                            <div>
                            <ul>
                                <a>
                                {/* <Link to="/Staff">Home</Link> */}
                                <Link to="/Staffdetail">Nhân Viên</Link>
                                </a>
                                <a>
                                <Link to="/Dept">Phòng Ban</Link>
                                </a>
                                <a>
                                <Link to="/Staff">Bảng Lương</Link>
                                </a>
                            </ul>

                            <hr />
                            <div class = "row">
                                {staffList}
                            </div>
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.name} />} />
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.doB} />} />
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.startDate} />} />
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.department} />} />
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.annualLeave} />} />
                            <Route exact path='/staffdetail' component={() => <StaffDetail staff={this.state.overTime} />} />

                            <Route exact path='/Dept' component={() => <DepartmentDetail name = {DEPARTMENTS[0].name}/>} />
                            <Route exact path='/Dept' component={() => <p>Số lượng nhân viên:</p>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail staffnumber = {DEPARTMENTS[0].numberOfStaff}/>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail name = {DEPARTMENTS[1].name}/>} />
                            <Route exact path='/Dept' component={() => <p>Số lượng nhân viên:</p>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail staffnumber = {DEPARTMENTS[1].numberOfStaff}/>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail name = {DEPARTMENTS[2].name}/>} />
                            <Route exact path='/Dept' component={() => <p>Số lượng nhân viên:</p>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail staffnumber = {DEPARTMENTS[2].numberOfStaff}/>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail name = {DEPARTMENTS[3].name}/>} />
                            <Route exact path='/Dept' component={() => <p>Số lượng nhân viên:</p>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail staffnumber = {DEPARTMENTS[3].numberOfStaff}/>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail name = {DEPARTMENTS[4].name}/>} />
                            <Route exact path='/Dept' component={() => <p>Số lượng nhân viên:</p>} />
                            <Route exact path='/Dept' component={() => <DepartmentDetail staffnumber = {DEPARTMENTS[4].numberOfStaff}/>} />
                            </div>
                    </BrowserRouter>
                    {/* <div class = "row">
                        {staffList}
                    </div> */}

                    {/* <div>
                        {Department}
                    </div> */}

                    {/* <div> */}
                        {/* {this.onStaffClick(this.state.staffs)} */}
                        {/* const element = {this.state.staffs[0].name}; */}
                        {/* const element = this.state.staffs[0].name; */}

                        {/* <StaffDetail staff={this.state.name} /> */}
                        {/* <StaffDetail staff={this.state.doB} /> */}
                        {/* <StaffDetail staff={this.state.startDate} /> */}
                        {/* <StaffDetail staff={this.state.department} /> */}
                        {/* <StaffDetail staff={this.state.annualLeave} /> */}
                        {/* <StaffDetail staff={this.state.overTime} /> */}

                        {/* {this.renderstaff(this.state.staffs)} */}
                        {/* {this.state.name} */}
                        {/* {this.state.staffs[0].name} */}
                        {/* <StaffDetail staff="Ford" /> */}
                        {/* <StaffDetail staff={this.state.name} />

                        <StaffDetail staff={this.state.doB} />
                        <StaffDetail staff={this.state.startDate} />
                        <StaffDetail staff={this.state.department} />
                        <StaffDetail staff={this.state.annualLeave} />
                        <StaffDetail staff={this.state.overTime} /> */}

                    {/* </div> */}
                    {/* <div> */}
                        {/* <DepartmentDetail name = {this.state.departmentName}/> */}
                        {/* <DepartmentDetail name = {this.state.name}/> */}
                        {/* <DepartmentDetail name = {this.state.depts[0].name}/> */}
                        {/* <DepartmentDetail name = {this.state.depts}/> */}
                        {/* <DepartmentDetail name = {DEPARTMENTS[0].name}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail staffnumber = {DEPARTMENTS[0].numberOfStaff}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail name = {DEPARTMENTS[1].name}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail staffnumber = {DEPARTMENTS[1].numberOfStaff}/> */}
                        {/* <DepartmentDetail name = {DEPARTMENTS[2].name}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail staffnumber = {DEPARTMENTS[2].numberOfStaff}/> */}
                        {/* <DepartmentDetail name = {DEPARTMENTS[3].name}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail staffnumber = {DEPARTMENTS[3].numberOfStaff}/> */}
                        {/* <DepartmentDetail name = {DEPARTMENTS[4].name}/> */}
                        {/* <div>
                            <p>Số lượng nhân viên:</p>
                        </div> */}
                        {/* <DepartmentDetail staffnumber = {DEPARTMENTS[4].numberOfStaff}/> */}
                        {/* <DepartmentDetail name = {this.state.dept[0].name}/> */}
                        {/* <DepartmentDetail name = {this.DEPARTMENTS.name} /> */}
                        {/* <DepartmentDetail name = {this.state.name} /> */}
                    {/* </div> */}
                    <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[0].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[0].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                            {/* <p>Mã nhân viên:</p> */}
                        </BrowserRouter>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[0].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[0].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                            {/* <p>Mã nhân viên:</p> */}
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[0].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[0].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[0].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[0].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[1].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[1].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                            {/* <p>Mã nhân viên:</p> */}
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[1].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[1].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                            {/* <p>Mã nhân viên:</p> */}
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[1].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[1].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[1].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[1].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[2].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[2].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[2].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[2].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[2].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[2].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[2].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[2].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[3].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[3].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[3].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[3].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[3].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[3].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[3].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[3].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[4].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[4].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[4].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[4].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[4].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[4].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[4].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[4].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[5].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[5].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[5].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[5].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[5].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[5].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[5].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[5].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[6].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[6].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[6].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[6].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[6].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[6].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[6].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[6].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[7].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[7].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[7].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[7].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[7].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[7].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[7].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[7].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[8].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[8].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[8].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[8].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[8].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[8].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[8].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[8].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[9].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[9].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[9].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[9].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[9].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[9].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[9].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[9].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[10].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[10].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[10].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[10].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[10].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[10].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[10].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[10].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[11].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[11].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[11].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[11].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[11].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[11].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[11].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[11].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[12].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[12].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[12].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[12].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[12].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[12].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[12].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[12].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[13].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[13].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[13].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[13].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[13].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[13].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[13].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[13].overTime}/> */}
                        <div>
                            <p>Lương:</p>
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[14].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[14].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[14].id}/>} />
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[14].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Hệ số lương:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[14].salaryScale}/>} />
                        </BrowserRouter>
                        {/* <Salary scale = {STAFFS[14].salaryScale}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[14].overTime}/>} />
                        </BrowserRouter>
                        {/* <Salary overtime = {STAFFS[14].overTime}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Lương:</p>} />
                        </BrowserRouter>
                            {/* <p>Lương:</p> */}
                        </div>
                        <BrowserRouter>
                        {/* <Salary overtime = {STAFFS[15].overTime}/> */}
                        <Route exact path='/staff' component={() => <Salary name = {STAFFS[15].name}/>} />
                        </BrowserRouter>
                        {/* <Salary name = {STAFFS[15].name}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Mã nhân viên:</p>} />
                        </BrowserRouter>
                            {/* <p>Mã nhân viên:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary id = {STAFFS[15].id}/>} />
                        {/* <Salary overtime = {STAFFS[15].overTime}/> */}
                        </BrowserRouter>
                        {/* <Salary id = {STAFFS[15].id}/> */}
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Hệ số lương:</p>} />
                            {/* <p>Hệ số lương:</p> */}
                        </BrowserRouter>
                        </div>
                        {/* <Route exact path='/staff' component={() => <Salary scale = {STAFFS[15].salaryScale}/>} /> */}
                        {/* <Route exact path='/staff' component={() => <Salary scale = {STAFFS[15].salaryScale}/>} /> */}
                        {/* <Salary scale = {STAFFS[15].salaryScale}/> */}
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary scale = {STAFFS[15].salaryScale}/>} />
                        {/* <Salary overtime = {STAFFS[15].overTime}/> */}
                        </BrowserRouter>
                        <div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <p>Số giờ làm thêm:</p>} />
                        </BrowserRouter>
                            {/* <p>Số giờ làm thêm:</p> */}
                        </div>
                        <BrowserRouter>
                        <Route exact path='/staff' component={() => <Salary overtime = {STAFFS[15].overTime}/>} />
                        {/* <Salary overtime = {STAFFS[15].overTime}/> */}
                        </BrowserRouter>
                        <div>
                            <p>Lương:</p>
                        </div>
                    </div>
                </div>
            );

    }

}

export default StaffList;
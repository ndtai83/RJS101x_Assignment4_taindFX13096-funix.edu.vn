import React, { Component } from "react";
// import { STAFFS } from './shared/staffs';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { STAFFS } from '../shared/staffs';

class Header extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     staffs : null,
        //     // staffs : STAFFS
        // };

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    // handleLogin1(event) {
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + " Password: " + this.password.value
    //         + " Remember: " + this.remember.checked);
    //     event.preventDefault();

    // }

    handleSearch(event) {
        // this.toggleModal();
        const reg = /^\d+$/;
        let name = this.username.value;
        alert(name);
        alert(STAFFS[0].name);
        // return (
        //     <div>
        //         <h4>Name</h4>
        //     </div>
        // );
        if (name.match(STAFFS[0].name)) {
            // return (
            //     <div>
            //         <h4>Name</h4>
            //     </div>
            // );
            alert("abc");
        } else {
            alert("abcd");
        }
        // reg.match(STAFFS[0].name);
        alert("Username: " + this.username.value);
        // alert("abc");
        event.preventDefault();

    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render() {
        // return <h2>Hi, I am a Car!</h2>;
        const required = (val) => val && val.length;
        const minLength = (len) => (val) => val && (val.length >= len);
        const maxLength = (len) => (val) => !(val) || (val.length <= len);

        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        {/* <Form onSubmit={this.handleLogin}> */}
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Tên</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(30)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                            minLength: 'Yêu cầu nhiều hơn 2 ký tự',
                                            maxLength: 'Yêu cầu ít hơn 30 ký tự'
                                        }}
                                    />
                                </Col>
                            {/* <FormGroup> */}
                                {/* <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} /> */}
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Ngày sinh</Label>
                                <Col md={10}>
                                    <Control.text model=".doB" id="doB" name="doB"
                                        placeholder="Birthday"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Ngày vào công ty</Label>
                                <Col md={10}>
                                    <Control.text model=".startDate" id="startDate" name="startDate"
                                        placeholder="Start Date"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                        }}
                                    />
                                </Col>
                            </Row>
                            {/* <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Phòng ban</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row> */}
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Phòng ban</Label>
                                {/* <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>Phòng ban</strong>
                                        </Label>
                                    </div>
                                </Col> */}
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Hệ số lương</Label>
                                <Col md={10}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        placeholder="Salary Scale"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Số ngày nghỉ còn lại</Label>
                                <Col md={10}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        placeholder="Annual Leave"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Số ngày đã làm thêm</Label>
                                <Col md={10}>
                                    <Control.text model=".overTime" id="overTime" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Thêm
                                    </Button>
                                </Col>
                            </Row>
                            {/* </FormGroup> */}
                        </LocalForm>
                        {/* </Form> */}
                    </ModalBody>
                </Modal>
                <Nav className="ml-auto" navbar>
                    {/* <NavItem> */}
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> +</Button>
                    {/* </NavItem> */}
                </Nav>
                {/* <Form onSubmit={this.handleLogin1}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                </Form> */}
            {/* <h2>Hi, I am a Car!</h2> */}
            <div className="searchForm">
                <Form onSubmit={this.handleSearch}>
                    <FormGroup>
                        {/* <Label htmlFor="username">Username</Label> */}
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                        {/* <Button type="submit" value="submit" color="primary">Login</Button> */}
                        <Button type="submit" value="submit" color="primary">Tìm</Button>
                    </FormGroup>
                        {/* <Button type="submit" value="submit" color="primary">Login</Button> */}
                </Form>
            </div>
            {/* <div>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                    </NavItem>
                </Nav>
            </div> */}
            </div>
        );
    }
}
    
// class Staff extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             staffs : null,
//             // staffs : STAFFS
//         };
//     }

//     onStaffClick(staff) {
//         this.setState({
//             staffs: staff,
//         });
//     }

//     renderstaff(staff) {
//         if(staff != null) {
//             return (
//                 <div>
//                     <h4>Họ và tên: {staff.name}</h4>
//                     <p>Ngày sinh: {staff.doB}</p>
//                     <p>Ngày vào công ty: {staff.startDate}</p>
//                     <p>Phòng ban: {staff.department.name}</p>
//                     <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
//                     <p>Số ngày đã làm thêm: {staff.overTime}</p>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <p>Bấm vào tên nhân viên để xem thông tin.</p>
//                 </div>
//             );
//         }
//     }

//     render() {
        
//             //const StaffList = (props) => {
//             // console.log(this.props) //Giá trị của props
//             // console.log(this.props.staffs[0].name);
//             const staffList = this.props.staffs.map((staff) => {
//                 return (
//                     // add css to arrange the text
//                     <div onClick = {() => this.onStaffClick(staff)}>
//                         <Card>
//                         {/* <CardImg src={item.image} alt={item.name} /> */}
//                         <CardImg src={staff.image} alt={staff.image} />
//                         {/* <CardBody>
//                         <CardTitle>{item.name}</CardTitle>
//                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//                         <CardText>{item.description}</CardText>
//                         </CardBody> */}
//                         </Card>
//                         <li>{staff.name}</li>
//                         {/* <li>{staff.image}</li> */}
//                     </div>
//                 );
//             })
//         //     <Home 
//         //       dish={this.state.dishes.filter((dish) => dish.featured)[0]}
//         //       promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
//         //       leader={this.state.leaders.filter((leader) => leader.featured)[0]}
//         //   />
//         //   const staffList = this.props.leaders.map((leader) => {
//         //       return (
//         //           <div>leader</div>
//         //       );
//         //   })
//             return (
//                 <div className = "container">
//                     <div class = "row">
//                         {staffList}
//                     </div>
//                     <div class="row">

//                     </div>
//                     <div>
//                         {/* {this.onStaffClick(this.state.staffs)} */}
//                         {this.renderstaff(this.state.staffs)}
//                     </div>
//                     <div>
//                         <Card>
//                         {/* <CardImg src={item.image} alt={item.name} /> */}
//                         <CardImg src= "/assets/images/alberto.png" alt="/assets/images/alberto.png" />
//                         {/* <CardBody>
//                         <CardTitle>{item.name}</CardTitle>
//                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//                         <CardText>{item.description}</CardText>
//                         </CardBody> */}
//                         </Card>
//                     </div>
//                 </div>
//             );

//     }

// }

export default Header;
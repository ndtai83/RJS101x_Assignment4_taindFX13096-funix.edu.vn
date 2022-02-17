import React, { Component } from "react";
// import { STAFFS } from './shared/staffs';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
    
class Staff extends Component {

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
        });
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
            // console.log(this.props.staffs[0].name);
            const staffList = this.props.staffs.map((staff) => {
                return (
                    // add css to arrange the text
                    <div onClick = {() => this.onStaffClick(staff)}>
                        <Card>
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
                    </div>
                );
            })
        //     <Home 
        //       dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        //       promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        //       leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        //   />
        //   const staffList = this.props.leaders.map((leader) => {
        //       return (
        //           <div>leader</div>
        //       );
        //   })
            return (
                <div className = "container">
                    <div class = "row">
                        {staffList}
                    </div>
                    <div class="row">

                    </div>
                    <div>
                        {/* {this.onStaffClick(this.state.staffs)} */}
                        {this.renderstaff(this.state.staffs)}
                    </div>
                    <div>
                        <Card>
                        {/* <CardImg src={item.image} alt={item.name} /> */}
                        <CardImg src= "/assets/images/alberto.png" alt="/assets/images/alberto.png" />
                        {/* <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                        </CardBody> */}
                        </Card>
                    </div>
                </div>
            );

    }

}

export default Staff;
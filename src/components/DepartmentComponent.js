// import React from "react";
// import React, { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

function DepartmentDetail(props) {
    return (
        <div className = "container">
            {/* <h4>Home</h4> */}
            {/* <h4>{this.props}</h4> */}
            {/* <h4>{this.props.staffs[0].name}</h4> */}
            {/* <h4>{this.props.staff}</h4> */}
            {/* console.log("abc"); */}
            {/* console.log(this.props); */}
            {/* console.log("abc"); */}
            {/* console.log(this,props.staff); */}
            {/* <h2>I am a { props.brand }!</h2>; */}
            {/* <h2>I am a { props.staff }!</h2> */}
            {/* <h4>Họ và tên:</h4> */}
            {/* <h2>{ props.staff }</h2> */}
            {/* console.log(this.props); */}
            {/* <h4>Props</h4> */}
            <h2>{props.name}</h2>
            {/* <p>Số lượng nhân viên:</p> */}
            <p>{props.staffnumber}</p>
            {/* <h4>Props</h4> */}
            {/* <h4>Pass props</h4> */}
            {/* <h2>I am a { props.brand }!</h2>; */}
            {/* console.log("def"); */}
            {/* <h4>{this.props}</h4> */}
        </div>
    )
}

// function Detail() {
//     return (
//       <>
//           <h1>Who lives in my garage?</h1>
//           <StaffDetail brand="Ford" />
//       </>
//     );
// }

// ReactDOM.render(<Detail />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

export default DepartmentDetail;
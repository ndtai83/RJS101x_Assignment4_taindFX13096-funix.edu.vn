// import React from "react";
// import React, { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

function StaffDetail(props) {
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
            {/* <ol>
                <li>Nhân viên</li>
            </ol>
            <p>Nhân viên</p> */}
            <h2>{ props.staff }</h2>
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

export default StaffDetail;
import React, { Component } from 'react'
import '../../Style/teacher.css'
import { BsFillPlusCircleFill } from "react-icons/bs";

export class Teacher extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='teacher'>
                <p>اسم المعلم : {this.props.teacher.name}</p>
                <p> رقم الهوية   : {this.props.teacher.idNum}</p>
                <p> رقم الهاتف : {this.props.teacher.phone}</p>
                <p> العنوان : {this.props.teacher.address}</p>
                <p> رقم الحساب   : {this.props.teacher.accountNum}</p>
                <BsFillPlusCircleFill />
            </div>
        )
    }
}

export default Teacher
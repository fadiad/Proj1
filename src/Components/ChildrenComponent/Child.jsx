import React, { Component } from 'react'
import '../../Style/teacher.css'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Button } from '@material/react-button';

export class Child extends Component {

    deleteChild = async () => {
        this.props.deleteChild(this.props.Child._id)
    }

    render() {

        return (
            <div className='teacher'>
                <p  >  اسم طفل: {this.props.Child.name}</p>

                <p> رقم الهوية   : {this.props.Child.idNum}</p>
                <p>  اسم الاب : {this.props.Child.Fname}</p>
                <p> اسم الام : {this.props.Child.Mname}</p>
                <p>رقم هاتف الاب  : {this.props.Child.Fnumber}</p>
                <p>رقم هاتف الام  : {this.props.Child.Mnumber}</p>
                <p>تاريخ الميلاد  : {this.props.Child.birthdate}</p>


                <BsFillPlusCircleFill />
                <br />
                <Button onClick={this.deleteChild} >حذف</Button>
            </div>
        )
    }
}

export default Child
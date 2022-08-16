import React, { Component } from 'react'
import '../../Style/teacher.css'
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddHours from './AddHours';
import axios from 'axios'
import * as ReactDOM from 'react-dom';


import Hours from './Hours';


export class Teacher extends Component {

    constructor() {
        super()
        this.state = {
            openDialog: false
        }
    }

    calculateTotal = (start, end) => {
        end = end.split(":");
        let startDate = new Date(0, 0, 0, start[0], start[1], 0);
        let endDate = new Date(0, 0, 0, end[0], end[1], 0);
        let diff = endDate.getTime() - startDate.getTime();
        let hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        let minutes = Math.floor(diff / 1000 / 60);
        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }

    addShift = async (start, end, date) => {
        let id = this.props.teacher._id;
        let total = this.calculateTotal(start, end)
        console.log(total);

        let shift = {
            "start": start,
            "end": end,
            "date": date,
            "total": total,
            "id": id
        }

        await fetch(`http://localhost:4000/shift`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shift)
        })

        let data = await axios.get(`http://localhost:4000/shift?id=${id}`)
        console.log(data);
    }

    setOpenDialog = () => {
        this.setState({
            openDialog: true
        })
    }

    setCloseDialog = () => {
        this.setState({
            openDialog: false
        })
    }


    showHours = () => {
        ReactDOM.render(<Hours id={this.props.teacher._id} />, document.getElementById('root'));
    }

    render() {
        return (
            <div className='teacher'>
                <div onClick={this.setOpenDialog}>
                    <BsFillPlusCircleFill />
                </div>

                <AddHours
                    addShift={this.addShift}
                    openDialog={this.state.openDialog}
                    setOpenDialog={this.setOpenDialog}
                    setCloseDialog={this.setCloseDialog}
                />
                <p>اسم المعلم : {this.props.teacher.name}</p>
                <p> رقم الهوية   : {this.props.teacher.idNum}</p>
                <p> رقم الهاتف : {this.props.teacher.phone}</p>
                <p> العنوان : {this.props.teacher.address}</p>
                <p> رقم الحساب   : {this.props.teacher.accountNum}</p>

                <p onClick={this.showHours}>الساعات</p>


            </div>
        )
    }
}

export default Teacher
import React, { Component } from 'react'
import Button from '@material/react-button';

import '../../Style/teacher.css'




import { Dialog, DialogTitle } from '@material-ui/core'



export class AddTeacher extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            idNum: 0,
            phone: 0,
            address: '',
            accountNum: 0,
        }
    }
    setName = (event) => {
        let name = event.target.value
        this.setState({
            name: name
        })
    }

    setIdNum = (event) => {
        let idNum = event.target.value
        this.setState({
            idNum: idNum
        })
    }

    setPhone = (event) => {
        let phone = event.target.value
        this.setState({
            phone: phone
        })
    }

    setAddress = (event) => {
        let address = event.target.value
        this.setState({
            address: address
        })
    }

    setAccountNum = (event) => {
        let accountNum = event.target.value
        this.setState({
            accountNum: accountNum
        })
    }

    handleClose = () => {
        this.props.setCloseDialog()
    }

    AddTeacher = () => {
        this.props.AddTeacher(this.state.name, this.state.idNum, this.state.phone, this.state.address, this.state.accountNum)
    }

    render() {
        return (
            <div>
                <Dialog
                    onClose={this.handleClose}
                    open={this.props.openDialog}
                    fullWidth
                    PaperProps={{
                        sx: {
                            width: "100%",
                            maxHeight: "20%"
                        }
                    }}
                >
                    <DialogTitle>
                        <div className='DialogTitle'>
                            اضافة معلم
                        </div>
                    </DialogTitle>

                    <div className='inputs' >

                        <div>
                            <span>الاسم</span>
                            <input type="text" onChange={this.setName} />
                        </div>
                        <div>
                            <span>رقم الهوية</span>
                            <input type="text" onChange={this.setIdNum} />
                        </div>
                        <div>
                            <span>رقم الهاتف</span>
                            <input type="text" onChange={this.setPhone} />
                        </div>
                        <div>
                            <span>العنوان</span>
                            <input type="text" onChange={this.setAddress} />
                        </div>

                        <div>
                            <span>رقم الحساب</span>
                            <input type="text" onChange={this.setAccountNum} />
                        </div>

                    </div>
                    <div style={{ textAlign : "center"  }}>
                        <Button style={{ margin: "10px", width: "80%" }} onClick={this.AddTeacher}>
                            اضافة معلم
                        </Button>

                        <Button style={{ margin: "10px", width: "80%" }} onClick={this.handleClose}>
                            اغلاق النافذة
                        </Button>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default AddTeacher
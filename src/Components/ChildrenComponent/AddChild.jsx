import React, { Component } from 'react'
import Button from '@material/react-button';
import '../../Style/teacher.css'
import { Dialog, DialogTitle } from '@material-ui/core'


export class addChild extends Component {


    constructor() {
        super()

        this.state = {
            childName: "",
            childId: 0,
            fatherName: "",
            motherName: "",
            fatherPhN: 0,
            motherPhN: 0,
            birthDate: Date,
        }
    }
    setName = (event) => {
        let name = event.target.value
        this.setState({
            childName: name
        })
    }

    setBD = (event) => {
        let BD = event.target.value
        this.setState({
            birthDate: BD
        })
    }

    setIdNum = (event) => {
        let idNum = event.target.value
        this.setState({
            childId: idNum
        })
    }

    setFphone = (event) => {
        let Fphone = event.target.value
        this.setState({
            fatherPhN: Fphone
        })
    }

    setMphone = (event) => {
        let Mphone = event.target.value
        this.setState({
            motherPhN: Mphone
        })
    }

    setFname = (event) => {
        let fName = event.target.value
        this.setState({
            fatherName: fName
        })
    }

    setMname = (event) => {
        let mName = event.target.value
        this.setState({
            motherName: mName
        })
    }

    handleClose = () => {
        this.props.setCloseDialog()
    }

    AddChild = () => {
        this.props.addChild(this.state.childName, this.state.childId, this.state.fatherName, this.state.motherName, this.state.fatherPhN,this.state.motherPhN,this.state.birthDate)
    }

    render() {
        return (
            <div>
                <Dialog
                    onClose={this.handleclose}
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
                            اضافة طفل
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
                            <span > اسم الاب</span>
                            <input type="text" onChange={this.setFname} />
                        </div>

                        <div>
                            <span > اسم الام</span>
                            <input type="text" onChange={this.setMname} />
                        </div>

                        <div>
                            <span >رقم هاتف الاب</span>
                            <input type="text" onChange={this.setFphone} />
                        </div>
                        <div>
                            <span>رقم هاتف الام</span>
                            <input type="text" onChange={this.setMphone} />
                        </div>

                        <div>
                            <span>تاريخ الميلاد </span>
                            <input type="text" onChange={this.setBD} />
                        </div>

                    </div>
                    <div style={{ textAlign : "center"  }}>
                        <Button style={{ margin: "10px", width: "80%" }} onClick={this.AddChild}>
                            اضافة طفل
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

export default addChild;
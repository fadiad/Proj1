import React, { Component } from 'react'
import Button from '@material/react-button';
import '../../Style/teacher.css'
import { Dialog, DialogTitle } from '@material-ui/core'


export class AddHours extends Component {

    constructor() {
        super()
        this.state = {
            start: '',
            end: '',
            date: '',
        }
    }

    setDate = (event) => {
        let date = event.target.value
        this.setState({
            date: date
        })
    }

    setStart = (event) => {
        let start = event.target.value
        this.setState({
            start: start
        })
    }

    setEnd = (event) => {
        let end = event.target.value
        this.setState({
            end: end
        })
    }

    handleClose = () => {
        this.props.setCloseDialog()
    }

    addShift = () => {
        this.props.addShift(this.state.start, this.state.end, this.state.date)
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
                            اضافة مناوبة
                        </div>
                    </DialogTitle>

                    <div className='inputs' >

                        <div>
                            <span> ساعة ابتداء المناوبة</span>
                            <input type="time" id="appt" name="appt"
                                min="09:00" max="18:00" onChange={this.setStart} required></input>
                        </div>

                        <div>
                            <span>ساعة انتهاء المناوبة</span>
                            <input type="time" id="appt" name="appt"
                                min="09:00" max="18:00" onChange={this.setEnd} required></input>
                        </div>

                        <div>
                            <span>تاريخ اليوم للمناوبة</span>
                            <input type="text" onChange={this.setDate} />
                        </div>

                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Button style={{ margin: "10px", width: "80%" }} onClick={this.addShift}>
                            اضافة مناوبة
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

export default AddHours

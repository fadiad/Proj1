import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../NavBar'
import { BsFillPersonPlusFill } from "react-icons/bs";
import '../../Style/teacher.css'
import Child from "./Child";
import AddChild from './AddChild'
import { Button } from '@material/react-button';
import Search from './Search';



export class Children extends Component {
    constructor() {
        super()

        this.state = {
            Children_: [],
            openDialog: false
        }
    }

    deleteChild = async (id) => {
        console.log(id);
        await fetch(`http://localhost:4000/child/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })

        let data = await axios.get(`http://localhost:4000/childrens`)
        this.setState({
            Children_: data.data
        })
    }

    componentDidMount = async () => {
        let data = await axios.get(`http://localhost:4000/childrens`)
        console.log(data.data);
        this.setState({
            Children_: data.data
        })
    }

    addChild = async (name, idNum, Fphone, Mphone, Fname, Mname, BD) => {
        let Child = {
            "name": name,
            "idNum": idNum,
            "Fphone": Fphone,
            "Mphone": Mphone,
            "Fname": Fname,
            "Mname": Mname,
            "BD": BD,
        }

        await fetch(`http://localhost:4000/children`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Child)
        })

        let data = await axios.get(`http://localhost:4000/childrens`)
        this.setState({
            Children_: data.data
        })
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

    render() {
        return (
            <div>
                <NavBar />
                <Search Children_={this.Children_} deleteChild={this.deleteChild} />

                <AddChild
                    addChild={this.addChild}
                    openDialog={this.state.openDialog}
                    setOpenDialog={this.setOpenDialog}
                    setCloseDialog={this.setCloseDialog}
                />
                <div className='addTeacher' onClick={this.setOpenDialog}>
                    < BsFillPersonPlusFill style={{ color: 'rgb(160 224 187)', fontSize: '80px' }} />
                </div>

                <div className='teachers'>
                    {
                        this.state.Children_.map(ch => {
                            return (
                                <div>
                                    <Child Child={ch} deleteChild={this.deleteChild} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        )
    }
}

export default Children;
import React, { Component } from 'react'
import Teacher from './Teacher'
import axios from 'axios'
import NavBar from '../NavBar'
import { BsFillPersonPlusFill } from "react-icons/bs";
import '../../Style/teacher.css'
import AddTeacher from './AddTeacher';



export class Teachers extends Component {
  constructor() {
    super()

    this.state = {
      teachers: [],
      openDialog: false
    }
  }


  componentDidMount = async () => {
    let data = await axios.get(`http://localhost:4000/teachers`)
    // console.log(data.data);
    this.setState({
      teachers: data.data
    })
  }

  addTeacher = async (name, idNum, phone, address, accountNum) => {
    let teacher = {
      "name": name,
      "idNum": idNum,
      "phone": phone,
      "address": address,
      "accountNum": accountNum
    }

    await fetch(`http://localhost:4000/teacher`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teacher)
    })

    let data = await axios.get(`http://localhost:4000/teachers`)
    this.setState({
      teachers: data.data
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

        <AddTeacher
          AddTeacher={this.addTeacher}
          openDialog={this.state.openDialog}
          setOpenDialog={this.setOpenDialog}
          setCloseDialog={this.setCloseDialog}
        />

        <div className='addTeacher' onClick={this.setOpenDialog}>
          < BsFillPersonPlusFill style={{ color: 'rgb(160 224 187)', fontSize: '80px' }} />
        </div>

        <div className='teachers'>
          {
            this.state.teachers.map(t => {
              return (
                <Teacher teacher={t} />
              )
            })
          }
        </div>

      </div>

    )
  }
}

export default Teachers
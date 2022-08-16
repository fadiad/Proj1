import React, { Component } from 'react'
import NavBar from './NavBar'
import '../Style/home.css'


export class Home extends Component {


  render() {
    return (
      <div className="home">

        <img src={require('../pictures/school.jpg')} />
        <h3 >روضة الامل</h3>
        <NavBar />

        <div className='container'>

          <div className='c'>
            <h4>المدير/ة</h4>
            <p>الأسم : امال خطيب </p>
            <p>رقم الهاتف : 0509947144</p>
          </div>

          <div className='c'>
            <h4>الروضة</h4>
            <p>رقم الهاتف : 0578537447</p>
            <p>ساعات الدوام : كل يوم من الساعة ال 7:00 حتى الساعة 14:00</p>
            <p>يتم استقبال الطلاب من العمر 3 شهور حتى العمر 3 سنوات </p>
          </div>


        </div>
      </div>
    )
  }
}

export default Home
import React, { Component } from 'react'

import { Link } from "react-router-dom";

import '../Style/navbar.css'

export class NavBar extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='navbar'>
                <Link style={{ textDecoration: 'none' }} to={"/"}><p>الرئيسية</p></Link>
                <Link style={{ textDecoration: 'none' }} to={"/teacher"}><p>المعلمون</p></Link>
                <Link style={{ textDecoration: 'none' }} to={"/children"}><p>الطلاب</p></Link>
                <Link style={{ textDecoration: 'none' }} to={"/Activities"}><p>النشاطات</p></Link>
            </div>
        )
    }
}

export default NavBar
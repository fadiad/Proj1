import React, { Component } from 'react'
import NavBar from './NavBar'



export class Children extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <NavBar />
                <div>Children</div>
            </div>
        )
    }
}

export default Children
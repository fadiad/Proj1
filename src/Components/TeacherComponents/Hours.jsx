import React, { Component } from 'react'
import axios from 'axios'
import '../../Style/teacher.css'


export class Hours extends Component {

    constructor() {
        super()
        this.state = {
            hours: [],
        }
    }

    componentDidMount = async () => {
        let data = await axios.get(`http://localhost:4000/shift?id=${this.props.id}`)
        this.setState({
            hours: data.data[0].shift
        })
    }

    render() {

        return (
            <div>
                {
                    this.state.hours.map(h => {
                        return (
                            <div className='shift'>
                                <p>بداية المناوبة : {h.start}</p>
                                <p>نهاية المناوبة : {h.end}</p>
                                <p>عدد الساعات الكلي : {h.total}</p>
                                <p> تاريخ المناوبة: {h.date}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Hours
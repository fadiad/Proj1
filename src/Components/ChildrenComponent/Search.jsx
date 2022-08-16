import React, { Component } from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import Child from './Child'
import axios from 'axios'
import '../../Style/search.css'


class Search extends Component {
  constructor() {
    super()
    this.state = {
      child: {},
      idSearched: ""
    }
  }

  search = async (event) => {
    let id = event.target.value

    let data = await axios.get(`http://localhost:4000/child?id=${id}`)
    console.log(data.data[0]);
    let child = { ...data.data[0] }
    this.setState({
      child: child
    })
  }

  deleteChild = async (id) => {
    this.props.deleteChild(id)
  }


  render() {
    return (
      <div className='search'>
        <span> ادخل رفم البطاقة : </span>
        <input type="text" onChange={this.search} />
        {this.state.child ?
          <Child Child={this.state.child} deleteChild={this.deleteChild} /> : null
        }
      </div>
    )
  }

  searchUpdated(term) {
    this.setState({ children: term })
  }
}

export default Search

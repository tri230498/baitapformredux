import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

class ProductManagement extends Component {
  render() {
    return (
      <div>
        <h3 className='text-center'>Bài tập Form-Redux</h3>
        <FormProduct/>
        <TableProduct />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(ProductManagement)
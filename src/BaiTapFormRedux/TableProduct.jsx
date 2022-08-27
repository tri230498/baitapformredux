import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableProduct extends Component {
  render() {
    return (
        <table className='table'>
        <thead className='text-white' style={{backgroundColor: "#353A3F"}}>
            <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>0123456789</td>
                <td>tri@gmail.com</td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Edit</button>
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(TableProduct)
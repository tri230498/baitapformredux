import React, { Component } from "react";
import { connect } from "react-redux";

class TableProduct extends Component {
  render() {
    let { arrSinhVien } = this.props.qlsvReducer;
    // console.log(arrSinhVien)
    return (
      <table className="table">
        <thead className="text-white" style={{ backgroundColor: "#353A3F" }}>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>0123456789</td>
                <td>tri@gmail.com</td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Edit</button>
                </td>
            </tr> */}
          {arrSinhVien.map((sinhVien, index) => {
            return (
              <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.hoTen}</td>
                <td>{sinhVien.sodienthoai}</td>
                <td>{sinhVien.email}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      const action = {
                        type: "XOA_TABLE",
                        payload: {
                          maSVClick: sinhVien.maSV,
                        },
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      const action = {
                        type: "EDIT_SV",
                        payload: {
                          maSVClick: sinhVien
                        },
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducer: state.qlsvReducer,
});

export default connect(mapStateToProps)(TableProduct);

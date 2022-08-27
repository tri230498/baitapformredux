import React, { Component } from "react";
import { connect } from "react-redux";

class FormProduct extends Component {
  render() {
    let { sinhVien } = this.props.qlsvReducer;
    console.log(sinhVien);
    return (
      <form className="card">
        <div
          className="card-header text-white fs-4"
          style={{ backgroundColor: "#353A3F" }}
        >
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="maSV" className="my-2">
                  Mã SV
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="maSV"
                  name="maSV"
                value={sinhVien.maSV}
                onChange = {(e) => {

                }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sodienthoai" className="my-2">
                  Số điện thoại
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="sodienthoai"
                  name="sodienthoai"
                  value={sinhVien.sodienthoai}
                  onChange = {(e) => {

                }}
                />
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label htmlFor="hoTen" className="my-2">
                  Họ tên
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="hoTen"
                  name="hoTen"
                  value={sinhVien.hoTen}
                  onChange = {(e) => {

                }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="my-2">
                  Email
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  value={sinhVien.email}
                  onChange = {(e) => {

                }}
                />
              </div>
            </div>
          </div>
          <button className="btn btn-success mx-2 mt-3">Thêm sinh viên</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducer: state.qlsvReducer,
});

export default connect(mapStateToProps)(FormProduct);

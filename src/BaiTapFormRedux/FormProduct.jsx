import React, { Component } from "react";
import { connect } from "react-redux";

class FormProduct extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      sinhVien: { ...this.props.qlsvReducer.sinhVien },
    };
    this.props.dispatch(action);
  };

  updateProduct = (sinVienUpdate) => {
    let prodUpdate = this.props.qlsvReducer.arrSinhVien.find(
      (sv) => sv.maSV == sinVienUpdate.maSV
    );
    if (prodUpdate) {
      for (let key in prodUpdate) {
        prodUpdate[key] = sinVienUpdate[key];
      }
    }

    const action = {
      type: "UPDATE_ARRPSV",
    };
    this.props.dispatch(action);

    console.log(sinVienUpdate);
  };

  // Tìm kiếm tuyến tinh Sinh Viên

  // findSinhVien = () => {
  //   // debugger
  //   var results = [];
  //   var keyword = document.getElementById("txtSearch").value;

  //   for (let key in this.props.qlsvReducer.arrSinhVien) {
  //     var currentSinhVien = this.props.qlsvReducer.arrSinhVien[key];
  //     if (
  //       currentSinhVien.maSV === keyword ||
  //       currentSinhVien.hoTen.includes(keyword)
  //     ) {
  //       results.push(currentSinhVien);
        
  //     }
  //   }
  // };







  render() {
    let { sinhVien } = this.props.qlsvReducer;
    // console.log(sinhVien);
    return (
      <form className="form">
        <div className="card">
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
                    onChange={(e) => {
                      const action = {
                        type: "HANDLE_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
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
                    onChange={(e) => {
                      const action = {
                        type: "HANDLE_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
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
                    onChange={(e) => {
                      const action = {
                        type: "HANDLE_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
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
                    onChange={(e) => {
                      const action = {
                        type: "HANDLE_CHANGE_INPUT",
                        id: e.target.id,
                        value: e.target.value,
                      };
                      this.props.dispatch(action);
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-success mx-2 mt-3"
              typeof="submit"
              onClick={this.handleSubmit}
            >
              Thêm sinh viên
            </button>
            <button
              typeof="button"
              className="btn btn-success mx-2 mt-3"
              onClick={(e) => {
                e.preventDefault();
                {
                  this.updateProduct(sinhVien);
                }
              }}
            >
              Cập nhật
            </button>
            {/* Search Sinh Viên */}
            <div className="row">
              <div className="col-4 d-flex" style={{ position: "relative" }}>
                <input
                  type="text"
                  name=""
                  id="txtSearch"
                  className="form-control my-2"
                  placeholder="Tìm kiếm Sinh Viên..."
                  onChange={(e) => {
                    const action = {
                      type: "SEARCH",
                      value : e.target.value,
                    }
                    this.props.dispatch(action)
                  }}
                />
                <div
                  className="icon"
                  style={{
                    position: "absolute",
                    right: 20,
                    bottom: 10,
                    fontSize: 20,
                  }}
                >
                  <ion-icon name="search-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducer: state.qlsvReducer,
});

export default connect(mapStateToProps)(FormProduct);

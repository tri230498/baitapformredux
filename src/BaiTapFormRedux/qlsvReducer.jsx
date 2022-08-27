
const stateDefault = {
    sinhVien: {
        maSV: "",
        sodienthoai:"",
        hoTen:"",
        email:"",
    }
}

export const qlsvReducer = (state = stateDefault,action) => {
    switch(action.type) {
        default: return state;
    }
}

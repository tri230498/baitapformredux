const stateDefault = {
  arrSinhVien: [
    {
      maSV: "1",
      hoTen: "Nguyễn Văn A",
      sodienthoai: "0123456789",
      email: "tri@gmail.com",
    },
    {
      maSV: "2",
      hoTen: "Nguyễn Văn B",
      sodienthoai: "0123456789",
      email: "tri@gmail.com",
    },
    {
      maSV: "3",
      hoTen: "Nguyễn Văn C",
      sodienthoai: "0123456789",
      email: "tri@gmail.com",
    },
    {
      maSV: "4",
      hoTen: "Nguyễn Văn D",
      sodienthoai: "0123456789",
      email: "tri@gmail.com",
    },
  ],
  sinhVien: {
    maSV: "",
    sodienthoai: "",
    hoTen: "",
    email: "",
  },
};

export const qlsvReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value } = action;

      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      let { sinhVien } = action;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

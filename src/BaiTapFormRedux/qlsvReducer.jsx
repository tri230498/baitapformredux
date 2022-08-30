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
    case "XOA_TABLE": {
      let { maSVClick } = action.payload;
      let tableUpdate = [...state.arrSinhVien];
      tableUpdate = tableUpdate.filter((sv) => sv.maSV !== maSVClick);

      state.arrSinhVien = tableUpdate;
      return { ...state };
    }
    case "EDIT_SV": {
      let { maSVClick } = action.payload;
      console.log(maSVClick);
      let sinhVien = { ...state.sinhVien };
      sinhVien = maSVClick;
      state.sinhVien = sinhVien;
      console.log(sinhVien);
      return { ...state };
    }
    case "UPDATE_ARRPSV": {
      let arrSinhVien = [...state.arrSinhVien];
      arrSinhVien = arrSinhVien;
      return { ...state };
    }
    case "SEARCH": {
      var result = [];
      let { value } = action;
      let arrSinhVien = [...state.arrSinhVien];
      if(!value) {
        state.arrSinhVien = arrSinhVien;
        
      }else {
        for (let key in arrSinhVien) {
          var arrSinhVienList = arrSinhVien[key]
          if (arrSinhVienList.maSV === value || arrSinhVienList.hoTen.includes(value)) {
            result.push(arrSinhVienList);
            state.arrSinhVien = result
          }
        }
      }




      return { ...state };
    }

    default:
      return { ...state };
  }
};

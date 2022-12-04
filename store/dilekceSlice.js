import { createSlice } from "@reduxjs/toolkit";




const dilekce = createSlice({
  name: "dilekce",
  initialState: {
    makam: "",
    altMakam: "",
    name: "",
    adress: "",
    phone: "",
    country: "",
    text: "",
    date: "",
    tc: false,
    altust: "",
    urls: [],
    ekler: [],
    tempData: { data: undefined, disabled: false },
    editData: {},
  },
  reducers: {
    changeMakam(state, action) {
      /* let wordsMakam = action.payload.split(" ");
      let makamName = "";
      if (action.payload.length)
        wordsMakam.map(
          (word) =>
            (makamName += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
        );*/
      state.makam = action.payload;
    },
    changeAltMakam(state, action) {
      /* let wordsMakam = action.payload.split(" ");
       let makamName = "";
       if (action.payload.length)
         wordsMakam.map(
           (word) =>
             (makamName += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
         );*/
      state.altMakam = action.payload;
    },
    changeName(state, action) {
      /* var words = action.payload.split(" ");
       var name = "";
       if (action.payload.length)
         words.map(
           (word) =>
             (name += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
         ); */
      state.name = action.payload;
    },
    changeAdress(state, action) {
      state.adress = action.payload;
    },
    changePhone(state, action) {
      state.phone = action.payload;
    },
    changeCountry(state, action) {
      state.country = action.payload;
    },

    changeText(state, action) {
      state.text = action.payload;
    },

    changeDate(state, action) {
      state.date = action.payload;
    },

    changeTc(state, action) {
      state.tc = action.payload;
    },
    changeAltust(state, action) {
      state.altust = action.payload;
    },


    changeURL(state, action) {
      if (action.payload.delete) {
        state.urls.splice(action.payload.data, 1);
        return;
      } else if (action.payload.edit) {
        var words = action.payload.data.site.split(" "); // title case conversion
        var name = "";
        if (action.payload.data.site.length)
          words.map(
            (word) =>
            (name +=
              word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
          );
        var temp = { ...action.payload.data };
        temp.site = name;

        state.urls[action.payload.index] = temp;
        return;
      }

      var words = action.payload.site.split(" "); // title case conversion
      var name = "";
      if (action.payload.site)
        words.map(
          (word) =>
            (name += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ")
        );
      var temp = { ...action.payload };
      temp.site = name;

      state.urls.push(temp);
    },
    changeEkler(state, action) {
      state.ekler = action.payload;
    },


    changeTemp(state, action) {
      state.tempData = action.payload;
    },
    changeEditData(state, action) {
      state.editData = action.payload;
    },
  },
});

export const {
  changeMakam,
  changeAltMakam,
  changeName,
  changeAdress,
  changeTc,
  changeDate,
  changeAltust,
  changePhone,
  changeCountry,
  changeText,
  changeURL,
  changeEkler,
  changeTemp,
  changeEditData,
} = dilekce.actions;
export default dilekce.reducer;

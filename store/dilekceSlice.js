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

    ekler: [],

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



    changeEkler(state, action) {
      state.ekler = action.payload;
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

} = dilekce.actions;
export default dilekce.reducer;

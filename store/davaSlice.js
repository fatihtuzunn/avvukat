import { createSlice } from "@reduxjs/toolkit";




const dilekce = createSlice({
    name: "dava",
    initialState: {
        mahkeme: "",
        davali: "",
        davaci: "",
        vekil: "",
        evlilikKaydi: {
            il: "",
            ilce: "",
            mahalle: "",
            cilt: "",
            sayfa: "",
            kutuk: "",
        },
        cocuk: 0,
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

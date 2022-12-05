import { createSlice } from "@reduxjs/toolkit";




const dava = createSlice({
    name: "dava",
    initialState: {
        mahkeme: "",
        davali: {
            isim: "",
            tc: "",
            adres: ""
        },
        davaci: {
            isim: "",
            tc: "",
            adres: ""
        },
        vekil: {
            isim: "",
            tc: "",
            adres: ""
        },
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

        changeMahkeme(state, action) {
            state.mahkeme = action.payload;
        },
        changeDavali(state, action) {
            {/* redux ttolkit immer lib */ }
            state.davali.isim = action.payload.isim;
            state.davali.tc = action.payload.tc;
            state.davali.adres = action.payload.adres;
        },
        changeDavaci(state, action) {
            {/* redux ttolkit immer lib */ }
            state.davaci.isim = action.payload.isim;
            state.davaci.tc = action.payload.tc;
            state.davaci.adres = action.payload.adres;
        },
        changeVekil(state, action) {
            {/* redux ttolkit immer lib */ }
            state.vekil.isim = action.payload.isim;
            state.vekil.tc = action.payload.tc;
            state.vekil.adres = action.payload.adres;
        },

        changeVekil(state, action) {
            state.vekil = action.payload;
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

    changeMahkeme,
    changeDavali,
    changeDavaci,
    changeVekil,
    changeDate,
    changeCountry,
    changeText,
    changeURL,
    changeEkler,
    changeTemp,
    changeEditData,
} = dava.actions;
export default dava.reducer;

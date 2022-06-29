import { createSlice } from "@reduxjs/toolkit";
import { pushToast } from "../components/Toast";
import http from "../core/services/httpService";

const slice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    total: 0,
    page: 0,
    search: "",
  },
  reducers: {
    getToursSuccess: (state, action) => {
      const { payload } = action;
      return { ...state, ...payload?.data, search: payload?.search };
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload.loading;
    },
  },
});

export default slice.reducer;

// Actions

const { getToursSuccess, setLoading } = slice.actions;

export const getTours = (page, search) => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const data = await http.get(`tour?page=${page}&keyword=${search}`);

    dispatch(getToursSuccess({ ...data, search }));
  } catch (e) {
    dispatch(setLoading({ loading: false }));
    pushToast("error", "Something wrong");
    return console.error(e.message);
  }
};

export const getToursByPath = (path, id) => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const data = await http.get(`tour/${path}/${id}`);

    dispatch(getToursSuccess({ ...data, search: "" }));
  } catch (e) {
    dispatch(setLoading({ loading: false }));
    pushToast("error", "Something wrong");
    return console.error(e.message);
  }
};

export const getToursSearchHome = ( props ) => async (dispatch) => {
  console.log('---hoang---', props);
  try {
    dispatch(setLoading({ loading: true }));
    const data = await http.post(`tour/home`, props);
    dispatch(getToursSuccess({ ...data, search: "" }));
  } catch (e) {
    dispatch(setLoading({ loading: false }));
    pushToast("error", e.message);
    return console.error(e.message);
  }
};

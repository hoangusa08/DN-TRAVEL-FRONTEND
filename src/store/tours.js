import { createSlice } from "@reduxjs/toolkit";
import { pushToast } from "../components/Toast";
import http from "../core/services/httpService";

const slice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    total: 0,
    page: 0,
  },
  reducers: {
    getToursSuccess: (state, action) => {
      const { payload } = action;
      return { ...state, ...payload?.data };
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

export const getTours = (values) => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const data = await http.get("tour");

    dispatch(getToursSuccess(data));
  } catch (e) {
    dispatch(setLoading({ loading: false }));
    pushToast("error", "Something wrong");
    return console.error(e.message);
  }
};

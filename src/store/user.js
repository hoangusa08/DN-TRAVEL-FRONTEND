import { createSlice } from "@reduxjs/toolkit";
import { setUserLocal, removeUserLocal } from "../core/localStore";
import { pushToast } from "../components/Toast";
import http from "../core/services/httpService";
import { USER_ROLE, ERRORS } from "../core/constants";
// import { useHistory } from "react-router";
// Slice

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const slice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
    loading: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { payload } = action;
      state.user = payload?.user;
      console.log(payload?.user);
      setUserLocal(payload?.token, payload?.user);
      if (payload?.rememberMe?.isRemember) {
        localStorage.setItem("rememberMe", JSON.stringify(payload?.rememberMe));
      } else {
        localStorage.removeItem("rememberMe");
      }
      if (!payload?.user?.isEnable) {
        window.location.href = "/verify-email";
        return;
      }
      if (payload?.user?.roles[0] === USER_ROLE.DEVELOP) {
        console.log(payload?.user?.isProfileCreated);
        if (payload?.user?.isProfileCreated === true) {
          window.location.href = "/my-projects";
        } else {
          window.location.href = "/profile-creation";
        }
      } else {
        // window.location.href = "/manage-projects";
        window.location.href = "/general-information";
      }
    },
    logoutSuccess: (state) => {
      state.user = null;
      removeUserLocal();
      window.location.href = "/login";
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload.loading;
    }
  }
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess, setLoading } = slice.actions;

export const login = (values) => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    const data  = await http.post("/authen/login", {
      email: values.email,
      password: values.password
    });
    let user = {
      ...data.user
    };
    const token = data.access_token || false;
    const rememberMe = {
      isRemember: values.isRemember,
      email: values.email,
      password: values.password
    };

    dispatch(setLoading({ loading: false }));
    if (!token) {
      pushToast("error", data?.message);
    } else if (data?.user?.roles[0] === USER_ROLE.ADMIN) {
      pushToast("error", ERRORS.ACCOUNT_PERMISSION);
    } else {
      dispatch(loginSuccess({ user, token, rememberMe }));
    }
  } catch (e) {
    // console.log(e.message);
    dispatch(setLoading({ loading: false }));
    pushToast("error", e.message);
    if (e.message === "Please confirm token!") {
      window.location.href = "/verify-email";
    }
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./user";
import toursReducer from "./tours"
// import projectsReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    // projects: projectsReducer
    tours: toursReducer
  }
});

export default store;
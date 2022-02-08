import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import feed from "./feed";
import photo from "./photo";
import token from "./token";
import ui from "./ui";
import user from "./user";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user, feed, ui });
const store = configureStore({ reducer, middleware });

export default store;

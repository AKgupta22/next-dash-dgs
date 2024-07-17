import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["workOrder"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export const { dispatch } = store;
export const persistor = persistStore(store);

export default store;

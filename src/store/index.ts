import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import layoutSlice from "./slice/layoutSlice";
import parcelSlice from "./slice/parcelSlice/parcelSlice";

const sessionConfig = {
  key: "all-speedy-session-root",
  storage: storageSession,
};

const sessionReducer = combineReducers({
  layout: layoutSlice,
  //   master: masterDataSlice,
});

const persistedSession = persistReducer(sessionConfig, sessionReducer);

const allReducer = combineReducers({
  session: persistedSession,
  parcel: parcelSlice,
});

export const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const migrations = {
  0: (state) => state,
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
  version: 1,
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    items: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REGISTER",
          "persist/REHYDRATE",
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

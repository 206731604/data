// configureStore.js

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["imgList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);
export { store, persistor };

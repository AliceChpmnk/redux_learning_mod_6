import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// Створюємо розширення стора, щоб додати інструменти розробника
// Якщо вам не потрібний початковий стан preloadedState, то значення enhancer передається другим аргументом. В іншому випадку - третім.
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
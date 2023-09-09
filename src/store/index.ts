import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./Theme/Theme.store"
import profileReducer from "./Profile/Profile.store"
 
const store = configureStore({
    reducer: {
        theme: themeReducer,
        profile: profileReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
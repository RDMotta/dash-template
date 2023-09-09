import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    profile : {
        name: '',
        email: '',
        avatarURL: '',
        occupation: '',
        id: '',
    }    
};

const profileReducer = createSlice({
    name: 'profileReducer',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            const { name, email, avatarURL, occupation, id} = action.payload;
            state.profile.name = name; 
            state.profile.email = email; 
            state.profile.avatarURL = avatarURL; 
            state.profile.occupation = occupation; 
            state.profile.id = id; 
        },
    }
})

export const { setProfile } = profileReducer.actions;
export default profileReducer.reducer; 
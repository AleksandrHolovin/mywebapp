import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    key: string
} = {
    key: "value"
};

const homeSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default homeSlice.reducer;
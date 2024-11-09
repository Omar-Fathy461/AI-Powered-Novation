import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const getAnswer = createAsyncThunk("ai/getAnswer", async(question , thunkAPI) => {
    const {rejectWithValue} = thunkAPI ;
    try {
        const response = await axiosInstance.post('', {
            "contents": [{ "parts": [{ "text": question }] }]
        })
        return response.data.candidates[0].content.parts[0].text
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const initialState = {
    question: '',
    answer: 'Hi',
    loading: false,
    error: null,
    previousQuestions: [] 
}

const aiSlice = createSlice({
    name:"ai",
    initialState,
    reducers:{
        setQuestion: (state, action) => {
            state.question = action.payload
        },
        addPreviousQuestion: (state, action) => {
            state.previousQuestions.push(action.payload);
        },
        newChat: (state) => {
            state.question = '';
            state.answer = '';
            state.loading = false;
            state.error = null;
            state.previousQuestions = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAnswer.pending, (state) => {
            state.loading = true;
            state.answer = 'loading...';
        });
        builder.addCase(getAnswer.fulfilled, (state, action) => {
            state.loading = false;
            state.answer = action.payload;
        });
        builder.addCase(getAnswer.rejected, (state, action) => {
            state.loading = false;
            state.answer = action.payload
        });
    }
});

export {getAnswer};
export const { setQuestion, addPreviousQuestion, newChat} = aiSlice.actions;
export default aiSlice.reducer;

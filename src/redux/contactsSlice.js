import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
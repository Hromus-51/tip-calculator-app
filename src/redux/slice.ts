import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface splitterState {
    bill: number | null,
    percent: number | null,
    custom: number | null,
    people: number | null,
    amount: number,
    total: number
}

const initialState: splitterState = {
    bill: null,
    percent: null,
    custom: null,
    people: null,
    amount: 0,
    total: 0,
}

export const splitterSlice = createSlice({
    name: 'splitter',
    initialState,
    reducers: {
        setBillState(state, action: PayloadAction<number | null>) {
            state.bill = action.payload;
        },
        setPercentState(state, action: PayloadAction<number>) {
            state.percent = action.payload;
            state.custom = null;
        },
        setCustomState(state, action: PayloadAction<number | null>) {
            state.percent = action.payload;
            state.custom = action.payload;
        },
        setPeopleState(state, action: PayloadAction<number | null>) {
            state.people = action.payload;
        },
        setAmountState(state, action: PayloadAction<number>) {
            state.amount = action.payload;
        },
        setTotalState(state, action: PayloadAction<number>) {
            state.total = action.payload;
        },
        reset: () => initialState,
    },
})

export const selectBill = (state: RootState) => state.splitterReducer.bill;
export const selectPercent = (state: RootState) => state.splitterReducer.percent;
export const selectPeople = (state: RootState) => state.splitterReducer.people;
export const selectAmount = (state: RootState) => state.splitterReducer.amount;
export const selectTotal = (state: RootState) => state.splitterReducer.total;
export const selectAll = (state: RootState) => state.splitterReducer;

export const {
    setBillState,
    setPercentState,
    setCustomState,
    setPeopleState,
    setAmountState,
    setTotalState,
    reset
} = splitterSlice.actions
export default splitterSlice.reducer
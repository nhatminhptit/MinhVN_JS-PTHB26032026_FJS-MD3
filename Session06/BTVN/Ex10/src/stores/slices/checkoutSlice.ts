import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  address: string;
  phone: string;
}

const initialState: CheckoutState = {
  address: "",
  phone: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutInfo: (state, action: PayloadAction<Partial<CheckoutState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCheckoutInfo } = checkoutSlice.actions;
export default checkoutSlice.reducer;

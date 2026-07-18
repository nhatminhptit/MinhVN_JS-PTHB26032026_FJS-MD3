import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      const status = action.payload?.status;
      const message =
        action.payload?.data?.message || "Có lỗi xảy ra từ hệ thống!";

      toast.error(`Lỗi ${status}: ${message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }

    return next(action);
  };

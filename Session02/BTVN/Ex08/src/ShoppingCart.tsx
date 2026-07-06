import { useReducer } from "react";

type Course = { id: number; title: string; price: number };

interface CartState {
  courses: Course[];
  discountCode: string | null;
  total: number;
}

const initialState: CartState = {
  courses: [],
  discountCode: null,
  total: 0,
};

type CartAction =
  | { type: "ADD_COURSE"; payload: Course }
  | { type: "REMOVE_COURSE"; payload: number }
  | { type: "APPLY_DISCOUNT"; payload: string };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_COURSE": {
      const isExist = state.courses.some(
        (course) => course.id === action.payload.id,
      );
      if (isExist) {
        alert("Khóa học này đã có trong giỏ hàng!");
        return state;
      }
      const newCourses = [...state.courses, action.payload];
      return {
        ...state,
        courses: newCourses,
        total: state.total + action.payload.price,
      };
    }
    case "REMOVE_COURSE": {
      const courseToRemove = state.courses.find((c) => c.id === action.payload);
      if (!courseToRemove) return state;
      const newCourses = state.courses.filter((c) => c.id !== action.payload);
      return {
        ...state,
        courses: newCourses,
        discountCode: !newCourses.length ? "" : state.discountCode,
        total: Math.max(0, state.total - courseToRemove.price),
      };
    }
    case "APPLY_DISCOUNT": {
      if (!state.courses.length) {
        alert("Chưa có khóa học trong giỏ để áp dụng mã!");
        return state;
      }

      if (state.discountCode === "GIAM50K") {
        alert("Đã áp dụng mã giảm giá này rồi!");
        return state;
      }
      const discountValue = action.payload === "GIAM50K" ? 50000 : 0;
      return {
        ...state,
        discountCode: action.payload,
        total: Math.max(0, state.total - discountValue),
      };
    }
    default:
      return state;
  }
};

export default function ShoppingCart() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const dummyCourse: Course = {
    id: 101,
    title: "Khóa học React TypeScript",
    price: 500000,
  };
  const dummyCourse2: Course = {
    id: 102,
    title: "Cấu trúc dữ liệu & Giải thuật",
    price: 800000,
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "40px auto",
        fontFamily: "system-ui, sans-serif",
        color: "#333",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          color: "#111",
        }}
      >
        Giỏ hàng của bạn
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={() => dispatch({ type: "ADD_COURSE", payload: dummyCourse })}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#e6f7ff",
            color: "#096dd9",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#bae7ff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#e6f7ff")
          }
        >
          Thêm: React TS (500k)
        </button>
        <button
          onClick={() =>
            dispatch({ type: "ADD_COURSE", payload: dummyCourse2 })
          }
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#e6f7ff",
            color: "#096dd9",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#bae7ff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#e6f7ff")
          }
        >
          Thêm: CTDL&GT (800k)
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0" }}>
        {cartState.courses.length === 0 ? (
          <p
            style={{ textAlign: "center", color: "#888", fontStyle: "italic" }}
          >
            Giỏ hàng đang trống.
          </p>
        ) : null}

        {cartState.courses.map((course) => (
          <li
            key={course.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 20px",
              border: "1px solid #eaeaea",
              borderRadius: "8px",
              marginBottom: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
            }}
          >
            <div>
              <strong
                style={{
                  fontSize: "16px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {course.title}
              </strong>
              <span style={{ color: "#666", fontSize: "14px" }}>
                {course.price.toLocaleString()} VNĐ
              </span>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_COURSE", payload: course.id })
              }
              style={{
                padding: "6px 12px",
                border: "1px solid #ffa39e",
                borderRadius: "4px",
                backgroundColor: "#fff1f0",
                color: "#f5222d",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffccc7")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff1f0")
              }
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <div
        style={{
          backgroundColor: "#fafafa",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #eaeaea",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "#555" }}>Mã giảm giá đã áp dụng:</span>
          <strong
            style={{ color: cartState.discountCode ? "#52c41a" : "#888" }}
          >
            {cartState.discountCode || "Chưa có"}
          </strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            paddingTop: "15px",
            borderTop: "1px dashed #d9d9d9",
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Tổng thanh toán:
          </span>
          <span
            style={{ fontSize: "24px", fontWeight: "bold", color: "#f5222d" }}
          >
            {cartState.total.toLocaleString()} VNĐ
          </span>
        </div>

        <button
          onClick={() =>
            dispatch({ type: "APPLY_DISCOUNT", payload: "GIAM50K" })
          }
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#1890ff",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#40a9ff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1890ff")
          }
        >
          Áp dụng mã GIAM50K
        </button>
      </div>
    </div>
  );
}

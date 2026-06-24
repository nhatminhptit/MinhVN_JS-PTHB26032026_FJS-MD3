import React from "react";

// Trong đoạn code cũ, biến state đang bị thay đổi trực tiếp nên React không biết state đã bị thay đổi, do đó hàm render sẽ không được gọi lại
class CartCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleAddToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("Đã tăng", this.state.count);
  };

  render() {
    return (
      <button onClick={this.handleAddToCart}>
        Giỏ hàng: {this.state.count}
      </button>
    );
  }
}

export default CartCounter;

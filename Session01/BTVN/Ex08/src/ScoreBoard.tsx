import { Component } from "react";

interface ScoreBoardProps {
  score: number;
}

class ScoreBoard extends Component<ScoreBoardProps> {
  shouldComponentUpdate(nextProps: ScoreBoardProps) {
    return this.props.score !== nextProps.score;
  }

  render() {
    console.log("ScoreBoard: Đã render lại bảng điểm!");

    return (
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "24px",
          width: "250px",
          margin: "20px auto",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          backgroundColor: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3
          style={{
            color: "#555",
            margin: "0 0 10px 0",
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          Điểm Thi Gần Nhất
        </h3>
        <h1 style={{ color: "#007bff", fontSize: "48px", margin: "0" }}>
          {this.props.score}
        </h1>
      </div>
    );
  }
}

export default ScoreBoard;

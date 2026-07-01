import { Component } from "react";

interface PomodoroState {
  timeLeft: number;
  isRunning: boolean;
}

class PomodoroTimer extends Component<{}, PomodoroState> {
  timerID?: ReturnType<typeof setInterval>;

  state: PomodoroState = {
    timeLeft: 1500,
    isRunning: false,
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleStart = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timerID = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));
      } else {
        clearInterval(this.timerID);
        this.setState({ isRunning: false });
      }
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.timerID);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    this.setState({ timeLeft: 1500 });
    this.setState({ isRunning: false });
    clearInterval(this.timerID);
  };

  render() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </h1>
        <button onClick={this.handleStart}>Bắt đầu</button>
        <button onClick={this.handlePause}>Tạm dừng</button>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.timeLeft === 0 && <h2>Hết giờ!</h2>}
      </div>
    );
  }
}

export default PomodoroTimer;

import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    console.log("Clock Mounted: Bắt đầu đếm giờ!");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log(
      "Clock Unmounted: Đã dọn dẹp Interval thành công, tránh Memory Leak!",
    );
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <>
        <h2>Đồng hồ Hệ thống Admin</h2>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </>
    );
  }
}

export default Clock;

import React from "react";

const normalizeDigits = (value: number): string => {
  if (value < 10) {
    return '0' + value;
  }
  return String(value);
}

class Clock extends React.Component<PropTypes, StateTypes> {
  interval: NodeJS.Timeout;

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      time: '',
    };
    this.updateTime = this.updateTime.bind(this);
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    const dateObject = new Date();

    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    const second = dateObject.getSeconds();

    const time = `${normalizeDigits(hour)} : ${normalizeDigits(minute)} : ${normalizeDigits(second)}`;

    this.setState({
      time,
    });
  }

  render() {
    const {
      time,
    } = this.state;

    const {
      className,
    } = this.props;
  
    return (
      <p className={className}>
        {time}
      </p>
    )
  }
}

type PropTypes = {
  className?: string;
}

type StateTypes = {
  time: string;
}

export default Clock;

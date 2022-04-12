import React from 'react';
import { Button, stepClasses } from '@mui/material';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 18,
    };
  }
  interval = null;

  startCountdown = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.state.count >= 0) {
        this.setState({
          count: this.state.count - 1,
        });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // constructor() {
  //   super();
  //   this.state = { time: {}, seconds: 200 };
  //   this.timer = 0;
  //   this.startTimer = this.startTimer.bind(this);
  //   this.countDown = this.countDown.bind(this);
  // }

  // secondsToTime(secs) {
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     h: hours,
  //     m: minutes,
  //     s: seconds,
  //   };
  //   return obj;
  // }

  // componentDidMount() {
  //   let timeLeftVar = this.secondsToTime(this.state.seconds);
  //   this.setState({ time: timeLeftVar });
  // }

  // startTimer() {
  //   if (this.timer == 0 && this.state.seconds > 0) {
  //     this.timer = setInterval(this.countDown, 1000);
  //   }
  // }

  // countDown() {
  //   // Remove one second, set state so a re-render happens.
  //   let seconds = this.state.seconds - 1;
  //   this.setState({
  //     time: this.secondsToTime(seconds),
  //     seconds: seconds,
  //   });

  //   // Check if we're at zero.
  //   if (seconds == 0) {
  //     clearInterval(this.timer);
  //   }
  // }

  // render() {
  //   return (
  //     <div
  //       style={{ display: 'flex', paddingTop: '10px', flexDirection: 'column' }}
  //     >
  //       <Button onClick={this.startTimer} variant='contained'>
  //         Start
  //       </Button>
  //       {this.state.time.m} : {this.state.time.s}
  //       {/* <Button onClick={this.setState.seconds}>Reset</Button> */}
  //     </div>
  //   );
  render() {
    return (
      <div
        style={{ display: 'flex', paddingTop: '10px', flexDirection: 'column' }}
      >
        <Button onClick={this.startCountdown} variant='contained'>
          Start
        </Button>
        {this.state?.count ?? 20}
      </div>
    );
    // }
  }
}
//hosting

// console.log(x);
// let x;
//Cannot access x before initialization
// var делает хостинг
// функция делает хостинг
// стрелочная функция не делает хостинг

// CLOSURE - ЗАМЫКАНИЯ
// function Counter2() {
//  let i = 0;
//  return () => {
//   console.log('hello world')
// i += 1
//  }
// } Чтобы были переменные с разными стейтами

// const counter = Counter2()
// console.log(counter)

// transform: scale() - масштаб
// translate(100px, 100px) - двигать
// rotate(45deg) - поворачивать
// transform don't push DOM elemetns,
// GPU videokarta
// CPU OZU

// SASS предпроцессор CSS

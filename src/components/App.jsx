// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    if (e.target.textContent === "good") {
      this.serState(prevState => ({
        good: prevState.good + 1,
      }));
    } else
      if (e.target.textContent === "neutral") {
        this.serState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
      } else
        if (e.target.textContent === "bad") {
          this.serState(prevState => ({
            bad: prevState.bad + 1,
          }))
        }
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.floor(this.state.good / this.countTotalFeedback() * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave us your frrdback">
          <FeedBackOptions options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistic good={good} neutral={neutral} bad={bad}
              total={total} positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    )

  }


}
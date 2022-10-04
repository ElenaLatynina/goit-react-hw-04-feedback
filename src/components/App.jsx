import React, { Component } from 'react';
import { Section } from './Section/Section';
import {FeedBackOptions} from './FeedBackOptions/FeedBackOptions';
import {Notification} from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (event) => {
    if (event.target.textContent === "good") {
      this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    } else
      if (event.target.textContent === "neutral") {
      this.setState(prevState => ({
      neutral: prevState.neutral + 1,
  }));
    } else
        if (event.target.textContent === "bad") {
          this.setState(prevState => ({
      bad: prevState.bad + 1,
  }));
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
          <Section title="Please leave your feedback">
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
    );
}
}

export default App;

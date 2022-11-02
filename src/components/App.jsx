import React, { Component } from 'react';
// import { useState } from 'react';
import { Section } from './Section/Section';
import {FeedBackOptions} from './FeedBackOptions/FeedBackOptions';
import {Notification} from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
  
// }

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (Btn) => { this.setState(prevState => ({ [Btn]: prevState[Btn] + 1, })); };

  countTotalFeedback = () => {
     return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(this.state.good / this.countTotalFeedback() * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedBackOptions  options={Object.keys(this.state)}
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
